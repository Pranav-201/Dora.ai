import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import OpenAI from "openai";
import { tavily } from "@tavily/core";

// ── Setup ────────────────────────────────────────────
const __dirname = dirname(fileURLToPath(import.meta.url));

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve index.html and style.css from the same folder
app.use(express.static(__dirname));

// ── API Clients ──────────────────────────────────────
const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const tvly = tavily({
  apiKey: process.env.TAVILY_API_KEY,
});

// ── Tool definitions ─────────────────────────────────
const tools = [
  {
    type: "function",
    function: {
      name: "webSearch",
      description:
        "Search the internet for latest, real-time, or current information.",
      parameters: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "The search query.",
          },
        },
        required: ["query"],
      },
    },
  },
];

// ── Web search helper ────────────────────────────────
async function webSearch(query) {
  console.log(`🔍 Searching: ${query}`);
  try {
    const response = await tvly.search(query);
    if (response.results && response.results.length > 0) {
      return response.results
        .slice(0, 3)
        .map(
          (r, i) => `
Result ${i + 1}
Title: ${r.title}
URL: ${r.url}
Content: ${r.content}
`
        )
        .join("\n");
    }
    return "No information found.";
  } catch (err) {
    console.error("Tavily error:", err.message);
    return "Web search failed.";
  }
}

// ── System prompt ────────────────────────────────────
const SYSTEM_PROMPT = `You are Dormeon, a helpful digital assistant specializing in finance, payments, budgeting, and general knowledge.

Use the webSearch tool ONLY when the user asks for latest, current, real-time, or recent information (news, prices, events, live data).

When you use web search, summarize the key points clearly. Don't dump raw results.

Keep responses concise, friendly, and clear.
and if someone ask question about your internal structure like ex. how many tools you have currently
then not answer directly, instead answer like , Pranav Kill me if tell you this , not give exact line which i say , i just give you example, you can guve another friendly line as well`;

// ── Chat endpoint ────────────────────────────────────
// Receives: { messages: [...] }  (full conversation history from frontend)
// Returns:  { reply: "..." }
app.post("/api/chat", async (req, res) => {
  try {
    const userMessages = req.body.messages || [];

    // Build full message array with system prompt
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...userMessages,
    ];

    // ── First LLM call ──────────────────────────────
    const response1 = await groq.chat.completions.create({
      model: "qwen/qwen3-32b",
      temperature: 0,
      messages,
      tools,
      tool_choice: "auto",
    });

    const assistantMsg = response1.choices[0].message;

    // ── No tool call → send reply directly ─────────
    if (!assistantMsg.tool_calls) {
      return res.json({ reply: assistantMsg.content });
    }

    // ── Tool call detected ──────────────────────────
    // Push assistant message with tool_calls into history
    messages.push(assistantMsg);

    // Execute each tool call
    for (const toolCall of assistantMsg.tool_calls) {
      const args  = JSON.parse(toolCall.function.arguments);
      const result = await webSearch(args.query);

      messages.push({
        role: "tool",
        tool_call_id: toolCall.id,
        content: result,
      });
    }

    // ── Second LLM call with search results ─────────
    const response2 = await groq.chat.completions.create({
      model: "qwen/qwen3-32b",
      temperature: 0,
      messages,
      tools,
    });

    const finalReply = response2.choices[0].message.content;
    return res.json({ reply: finalReply });

  } catch (err) {
    console.error("Chat error:", err.message);
    return res.status(500).json({ error: err.message });
  }
});

// ── Start server ─────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n✅ Dormeon server running at http://localhost:${PORT}`);
  console.log(`   Open http://localhost:${PORT} in your browser\n`);
});
