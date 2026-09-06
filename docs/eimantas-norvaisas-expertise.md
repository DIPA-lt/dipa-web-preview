# Eimantas Norvaišas — expertise profile
**For client proposals · external / fractional hours**

---

## One-line

Principal AI Engineer. Builds and runs production multi-agent and RAG systems on Google Cloud — full stack, from the interface to the model to the deploy.

---

## Profile

**Eimantas Norvaišas** is a principal AI engineer and systems architect. He turns a business problem into a running system: the interface, the agents, the retrieval layer, the data boundaries, and a way to see whether the work improved.

He has been building with large language models since **2019** — before ChatGPT existed as a product. He started when the work was still APIs, failure modes, cost, and whether a model can be trusted in a process.

He lived and studied in the **United Kingdom** and completed machine-learning courses there (see Courses). He works in English and Lithuanian. The systems he ships today run in production on **Google Cloud**.

What a client buys is not an AI consultant who writes prompts. They buy hours of someone who already works end-to-end in this stack: web applications, multi-agent flows, RAG over real corpora, several databases, multiple model providers, and cloud deploys.

He treats AI as infrastructure for better decisions, not as a chatbot bolted onto a process. A person still decides. The system prepares, scores, retrieves and advises.

---

## What the client gets when they buy his hours

| Mode | Typical use |
|---|---|
| **Design** | Scope the problem, data, agents, human gates, and the metric that will prove the work. |
| **Build** | Production web apps and services — Next.js, TypeScript, Python — plus RAG, multi-agent flows across LangGraph / LangChain, several databases, and cloud deploys on Cloud Run and Vercel. |
| **Harden** | Cost, latency, GDPR-class routing, fallbacks, evaluation. |
| **Operate** | Deploy, observe, fix, and leave a repeatable runbook — not a dependency on one laptop. |

He works as a **fractional technical lead**: he will sit in the problem, write the system, and stay until it runs.

**Recommended engagement:** a defined number of hours per month (or a 90-day block) against a named process and a baseline. GATE at the end: scale, change, or stop.

---

## Architecture and problem-solving

This is the core of what the client buys. Frameworks change; the ability to design a system that holds does not.

- **Systems architecture.** Designs custom systems from the business problem down: data model, agent topology, retrieval layer, human gates, deploy path, and the metric that proves the work. Chooses build-vs-buy deliberately, not by hype.
- **Decomposition of complex tasks.** Takes an ambiguous problem, breaks it into agents and steps that can each be tested, and defines where a human must confirm. Knows when *not* to use an LLM.
- **Automation design.** Builds end-to-end automations — intake, enrichment, scoring, routing, reporting — that run unattended and fail safely, with fallbacks and clear JSON contracts between steps.
- **Agentic orchestration.** Multi-agent flows with explicit control: author–critic (separate model or vendor class), tool use, state, memory, retries, cost-aware routing, and evaluation sets so a fix never breaks what already worked.
- **Solving with AI, responsibly.** Grounds output in real data, measures it, and keeps a person on the decision. If a system cannot show what changed and what to do next, he does not call it done.
- **Production judgement.** Diagnoses the unglamorous failures — timeouts, throttled compute, malformed model output, silent cost — and hardens against them before they reach a client.

---

## Expertise

### Multi-agent systems
Agent runtimes in application code and in orchestration frameworks (**LangGraph**, **LangChain**). Fast cheap passes before expensive research. Author–critic patterns across providers. Tool-calling, state, memory, retries and human confirm before action. Cost-aware routing. Evaluation / gold sets.

### RAG and grounded generation
Retrieval-augmented assistants on real document stores: chunking strategy, embeddings, vector search, re-ranking, citations, grounded chat. Comfortable across managed and self-hosted retrieval — Vertex AI Search / RAG, LangChain retrievers, and vector stores (**pgvector / Supabase**, **Pinecone**, **Chroma**, **FAISS**). Agents answer from the organisation’s own context instead of guessing.

### Models and providers
Works across providers rather than being locked to one: **Google Gemini / Vertex AI** (including Deep Research and grounded search), **OpenAI GPT** (GPT-2 API era through current models), **Anthropic Claude**, **Meta Llama** and other open-weight models, and multi-provider routing via **OpenRouter**. Chooses the model per task by cost, latency, context window and reliability.

### Databases and data
Relational and NoSQL, managed and self-hosted: **PostgreSQL** (incl. **Supabase** and **Cloud SQL**), **SQLite**, **Firestore**, **MySQL**, **Redis**, and **vector databases** for retrieval. ORM and query layers (**Prisma**, **Drizzle**, raw SQL). Migrations, connection pooling, and data-class boundaries.

### Cloud and deployment
- **Google Cloud** — Vertex AI, Cloud Run, Cloud Build → Artifact Registry, Secret Manager, IAM, multi-project layout, speech-to-text
- **Vercel** — Next.js apps, preview deploys, edge / serverless functions
- **Firebase** — Firestore, Auth, Hosting
- **Supabase** — Postgres, Auth, storage, pgvector
- **Docker** — containerised services across all of the above

### Full-stack delivery
He does not hand a notebook over the wall. He ships the product: pages, APIs, agents, database, and the cloud path they run on.

---

## Technical stack

**Languages**
TypeScript (strict), JavaScript, Python, HTML, CSS, SQL, Docker, shell.

**Web and UI**
Next.js (App Router), React, Tailwind CSS, Node.js APIs, Prisma / Drizzle.

**Agentic frameworks**
LangGraph, LangChain, in-app agent runtimes, author–critic / tool-calling patterns, evaluation harnesses.

**AI and models**
Gemini / Vertex AI, OpenAI GPT (GPT-2 era → current), Anthropic Claude, Meta Llama and open-weight models, OpenRouter multi-provider routing, embeddings, RAG.

**Databases**
PostgreSQL, Supabase, Cloud SQL, SQLite, Firestore, MySQL, Redis, vector DBs (pgvector, Pinecone, Chroma, FAISS).

**Cloud and deploy**
Google Cloud (Vertex AI, Cloud Run, Secret Manager, Artifact Registry, Cloud Build), Vercel, Firebase, Supabase, Docker.

**Practice**
Human-in-the-loop, advise-only agents, cost-aware routing, GDPR-aware data classes, production debugging (timeouts, CPU, JSON contracts, fallbacks).

---

## Courses

Completed machine-learning courses (studied while based in the UK):

- *Mathematics for Machine Learning* — Coursera specialization (Linear Algebra; Multivariate Calculus; PCA). Certificate of completion.
- *Machine Learning for All* — Coursera. Certificate of completion.
- *From Data to Decisions: An Introduction to Machine Learning* — supervised / unsupervised models, performance measures, R workshop. Certificate.

These sit under years of applied LLM work (from 2019 onward) and current production work — not instead of them.

---

## How to write him into the proposal

**Suggested title on the rate card:**  
Principal AI Engineer · Multi-agent & RAG systems · Google Cloud / Vertex AI

**Suggested paragraph (short):**

> External hours are delivered by **Eimantas Norvaišas**, principal AI engineer and systems architect. He has worked with language-model APIs since 2019, before ChatGPT. He completed machine-learning courses including *Mathematics for Machine Learning*, *Machine Learning for All*, and *From Data to Decisions* while based in the UK. His strength is architecture: designing custom systems, building automations, and decomposing complex problems into agent flows that hold in production. Stack: Next.js, React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Python, SQL; LangGraph and LangChain; Gemini / Vertex AI, OpenAI GPT, Anthropic Claude, Llama and open-weight models via OpenRouter; PostgreSQL, Supabase, Firestore, SQLite, Redis and vector databases; Google Cloud (Cloud Run, Vertex AI), Vercel, Firebase and Docker. The client is buying hours of someone who ships this class of system end-to-end, with a human still on the decision.

**What not to promise:** that AI holds final responsibility. He designs the gate. The client’s people decide.

---

## Lithuanian (same profile, for LT proposals)

**Eimantas Norvaišas** — vyriausiasis DI inžinierius ir sistemų architektas. Projektuoja, paleidžia ir prižiūri gamybines multiagentines ir RAG sistemas **Google Cloud** aplinkoje.

Su kalbos modelių API dirba nuo **2019**, dar prieš ChatGPT. Gyveno Jungtinėje Karalystėje; ten baigė mašininio mokymosi kursus, tarp jų *Mathematics for Machine Learning*, *Machine Learning for All* ir *From Data to Decisions: An Introduction to Machine Learning*.

Stiprybė — architektūra: kuria individualias sistemas, automatizacijas ir skaido sudėtingas problemas į agentų srautus, kurie laikosi gamyboje.

Stekas: **Next.js**, React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Python, SQL; **LangGraph**, LangChain; **Gemini / Vertex AI**, OpenAI GPT, Anthropic Claude, Llama ir open-weight modeliai per OpenRouter; **PostgreSQL**, Supabase, Firestore, SQLite, Redis ir vektorinės DB; Google Cloud (Cloud Run, Vertex AI), Vercel, Firebase, Docker. Klientas perka valandas žmogaus, kuris tokią sistemą jau paleidžia nuo sąsajos iki modelio ir deploy.
