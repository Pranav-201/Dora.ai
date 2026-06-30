# Dora.ai
# 🚀 Dora AI – An Intelligent LLM Assistant with Tool Calling

<div align="center">

![Status](https://img.shields.io/badge/Status-Active-success)
![GenAI](https://img.shields.io/badge/Generative%20AI-Project-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-61DAFB)
![Gemini](https://img.shields.io/badge/Google-Gemini-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

### Building the bridge between Full Stack Engineering and Generative AI.

</div>

---

# 🌟 Overview

**Dora AI** is an advanced Generative AI project inspired by the concept of an intelligent digital companion. It demonstrates how modern Large Language Models (LLMs) can move beyond simple text generation and become systems capable of **reasoning, decision-making, and interacting with external tools**.

This project marks my transition from:

```text
Full Stack Development
        ↓
Cloud Computing
        ↓
Generative AI Engineering
```

Dora AI serves as my practical implementation of modern GenAI concepts including:

* LLM Invocation
* Prompt Engineering
* Multi-turn Conversations
* Context Management
* Function / Tool Calling
* External API Integration
* Agentic Workflows (Upcoming)
* Retrieval Augmented Generation (Upcoming)

---

# 🎯 Vision

The goal of Dora AI is to build an intelligent assistant capable of:

* Understanding user intent.
* Deciding when external information is required.
* Calling appropriate tools automatically.
* Combining tool outputs with LLM reasoning.
* Laying the foundation for future AI Agents and Autonomous Systems.

---

# 🏗️ System Architecture

```text
┌─────────────┐
│    User     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ React Frontend │
└──────┬──────┘
       │ REST API
       ▼
┌─────────────┐
│ Express Backend │
└──────┬──────┘
       │
       ▼
┌────────────────────┐
│ Google Gemini LLM  │
└──────┬─────────────┘
       │
       ▼
┌────────────────────┐
│ Tool Calling Engine│
└──────┬─────────────┘
       │
       ├── Weather API
       ├── Calculator
       ├── Search Engine
       └── Custom Functions
```

---

# ✨ Features

## 🤖 LLM Invocation

* Integration with Google's Gemini models.
* Dynamic response generation.
* Context-aware interactions.
* Structured prompts.

---

## 💬 Multi-Turn Conversations

* Maintains chat history.
* Understands follow-up questions.
* Context preservation across messages.
* Session-based conversation management.

---

## 🧠 Prompt Engineering

* Custom system instructions.
* Controlled model behavior.
* Structured output generation.
* Persona-based responses.

---

## 🔧 Intelligent Tool Calling

The core feature of Dora AI is its ability to decide **when** and **which** external tools should be called.

### Workflow

```text
User Query
     ↓
LLM Analysis
     ↓
Need External Information?
     ↓
   Yes         No
    ↓            ↓
Call Tool     Generate Response
    ↓
Receive Data
    ↓
LLM Generates Final Answer
```

---

## 🌐 External Tool Integration

Current tools supported:

* Weather Information
* Mathematical Calculations
* Search Functionality
* Custom APIs
* Utility Functions

The architecture is fully modular and allows additional tools to be integrated with minimal changes.

---

# 🧩 Tool Calling Example

### User Query

```text
What's the weather in Pune?
```

### Internal Execution

```text
1. User sends query.
2. LLM detects external information requirement.
3. Weather Tool is invoked.
4. API returns weather information.
5. LLM generates natural language response.
```

---

# 🛠️ Technology Stack

## Frontend

* React.js
* Vite
* CSS3

## Backend

* Node.js
* Express.js
* REST APIs

## Generative AI

* Google Gemini API
* Prompt Engineering
* Tool Calling
* Function Invocation
* Context Management

## Development Tools

* Git
* GitHub
* Postman
* Environment Variables

---

# 📂 Project Structure

```bash
Dora-AI/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── tools/
│   ├── middleware/
│   └── utils/
│
├── README.md
├── package.json
└── .env
```

---

# 🧠 Concepts Implemented

| Topic                    | Status |
| ------------------------ | ------ |
| LLM Invocation           | ✅      |
| Prompt Engineering       | ✅      |
| Multi-Turn Chat          | ✅      |
| Tool Calling             | ✅      |
| Context Management       | ✅      |
| External API Integration | ✅      |
| Streaming Responses      | 🔄     |
| RAG                      | 🔄     |
| AI Agents                | 🔄     |
| Multi-Agent Systems      | 🔄     |

---

# 📈 Roadmap

## Phase 1 – Foundation

* ✅ LLM Invocation
* ✅ Prompt Engineering
* ✅ Multi-turn Conversations
* ✅ Tool Calling

## Phase 2 – Knowledge Systems

* 🔄 Embeddings
* 🔄 Vector Databases
* 🔄 Retrieval Augmented Generation (RAG)

## Phase 3 – Agentic AI

* 🔄 Autonomous Agents
* 🔄 Planning & Reasoning
* 🔄 Memory Architecture
* 🔄 Multi-Agent Collaboration

## Phase 4 – Production Readiness

* 🔄 Authentication
* 🔄 Monitoring & Logging
* 🔄 Cloud Deployment
* 🔄 Scalable Infrastructure

---

# 💡 Key Learnings

Through Dora AI, I gained practical experience in:

* Building production-ready LLM applications.
* Designing tool-calling architectures.
* Managing conversational state.
* Prompt engineering techniques.
* Integrating external APIs with AI systems.
* Understanding the foundations of Agentic AI.

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/yourusername/dora-ai.git
cd dora-ai
```

## Install Dependencies

```bash
npm install
```

## Run Application

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file:

```env
GEMINI_API_KEY=your_api_key
PORT=5000
```

---

# 🎯 Future Goals

Dora AI is not just another chatbot.

It is the first step toward building:

* AI Copilots
* AI Agents
* Enterprise GenAI Systems
* Autonomous Multi-Agent Applications
* Production-Ready Intelligent Systems

---

# 👨‍💻 Author

## Pranav Amrutkar
