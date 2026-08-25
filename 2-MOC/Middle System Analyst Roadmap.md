# Middle System Analyst Roadmap

> **Curriculum tier legend:**
> No emoji — required (Core or Awareness)
> 🔵 Bonus — optional, earns extra badge

---

## Course Orientation
> *Watch this before anything else. No IT knowledge required — this lesson is for you on day one.*

### What This Course Is About
- What problem this course solves — "I want to work in IT but I don't know how to start"
- What a System Analyst does in one sentence (before the full definition comes in Module 2)
- What you will be able to do after finishing — concrete deliverables: write SRS, draw BPMN, design ERD, document APIs, run a UAT
- What this course does NOT cover — no coding, no deep DevOps, no data science; SA is the bridge, not the builder

### Who This Course Is For
- Zero IT experience required — every term is explained from scratch, every concept has a real-world analogy
- Career switchers: anyone moving from non-IT fields (finance, law, logistics, management, education)
- Junior analysts who learned on the job and want to fill structural gaps
- Who will struggle: people who expect to just watch and pass — this course requires active participation

### Syllabus Overview
- How the course is structured — modules, lessons, bonus tracks
- Core path vs Bonus Tracks — what you must complete vs what earns specialization badges
- Estimated time to complete the core path
- How modules connect: each module builds on the previous one — skipping is not recommended
- The capstone project — one real domain (BookNook bookstore) used across all diagram types to show how everything fits together

### What Makes This Course Different
- Socratic method — the instructor asks first, you answer, then comes the explanation; you talk 60% of the time
- Real-world bridge before every concept — no raw definitions; every IT term is introduced through something you already know from everyday life
- Atomic flashcards (Anki) — every lesson produces flashcards; spaced repetition keeps knowledge long-term, not just "passed the test"
- Deliverables-first — you leave every module with a real artifact: a BPMN diagram, a User Story, an ERD, not just notes
- Kahoot checks — fast competitive quizzes after each module; if you can't answer under pressure, you don't actually know it yet
- No fluff — lessons are ≤ 15 minutes each; every minute has a purpose

### How to Use the Platform
- How lessons are structured: title frame → hook → bridge → concept → section check → recap
- Excalidraw slides — how to open the presentation mode; what the frames look like
- Anki flashcards — how to import the deck, how spaced repetition works, why you review every day not just before a test
- Kahoot — when it runs (after each module), how to join, why your score matters less than your mistakes
- Obsidian vault — if you're using the companion vault: how notes link to each other, how to navigate with the roadmap as the home page
- Where to ask questions — and why asking is not a sign of weakness, it's the mechanism of learning

### How to Learn Effectively — Mindset
- **Rewatching is normal** — if you didn't get it on the first watch, that's expected, not a failure; complex concepts need 2–3 exposures before they click
- **Passive watching is the trap** — watching without pausing, asking, or explaining back = feeling like you learned without actually learning
- **The Feynman Technique** — after each lesson, close the video and try to explain the concept out loud as if teaching a 10-year-old; where you get stuck = where the gap is; go back only to those parts
- **Ask more questions, not fewer** — every question you don't ask stays a gap; in a real SA role, unasked questions become wrong requirements
- **Spaced repetition beats cramming** — 10 minutes of Anki every day beats 2 hours the night before a review; the deck is built for daily use
- **Connect concepts, don't collect them** — after each module, ask "how does this connect to what I learned before?"; isolated facts fade, networks stay
- **Mistakes in Kahoot are valuable** — a wrong answer you understand is worth more than a right answer you guessed
- **Be patient — and enjoy the process**
  - Rome wasn't built in a day, and neither is a career. Universities spend 3–4 years on this material — and half of it you'll never use on the job. This course cuts straight to what matters. It will still take months, not days. That's not a flaw — that's what real skill-building feels like.
  - If it were easy, everyone would already be a BA or SA. It's not. This is not one of those courses promising a new career in 2 weeks with zero effort — that's a lie wrapped in a discount code. No pain, no gain.
  - That said — nothing here is impossible. With the right order, the right analogies, and a good instructor, anyone can learn this. The material is not as scary as it looks from the outside.
  - Think of it as a deal: you bring the effort and consistency, I bring the clearest explanations I can write, real-world analogies for every concept, and a sequence that makes each new idea feel like a natural next step. You do your part, I'll do mine — and it works.

---

## Introduction to System Analysis

### Why this job exists
- What is a software product
- Client vs User vs Business
- The cost of bad requirements
- What is a System Analyst

### Role & Responsibilities
- SA role and responsibilities
- SA vs BA vs Product Manager
- SA vs Developer
- Core SA deliverables
- SA hard skills overview
- SA soft skills overview
- SA career path — Junior → Middle → Senior

### Company Types & Team Structure
- Product company vs outsource vs in-house IT
- How SA role differs by company type
- Startup vs enterprise — how team structure changes
- IT roles and hierarchy
- How a product team is organized
- Who SA works with daily (Dev, QA, PO, PM, DevOps)
- Agile ceremonies and SA's role in them *(Agile defined in SDLC module — here: which ceremonies SA attends and why)*

### Stakeholder Management
- Stakeholder identification and management
- Types of stakeholders
- Client vs User vs Business stakeholder goals
- Stakeholder Register
- Power-Interest Matrix
- RACI matrix
- Conflict between stakeholders
- Stakeholder communication plan

---

## SDLC
**Slides:** [[7-slides/sdlc-methodologies/methodologies-slides|Методологии]] · [[7-slides/task-management/task-management-slides|Управление задачами]]

### SDLC Stages
- Concept & Initiation
- Requirements
- Design
- Development
- Testing
- Deployment
- Maintenance
- Solution Evaluation / Post-Implementation Review — did we deliver what was promised?
- Client-Server model — how software systems are structured: client (frontend / app) sends requests, server (backend) responds; this pattern underlies every system SA will work with

### Methodologies
- Waterfall
- Agile manifesto & principles
- Scrum (roles, ceremonies, artifacts)
- Kanban (WIP limits, flow)
- Scrumban
- SA in Waterfall vs Agile

### Task Management
- Story Points & estimation
- Planning Poker
- Velocity
- Definition of Done vs Acceptance Criteria
- Jira (Epic, Story, Task, Bug, JQL)
- RAID Logs — Risks, Assumptions, Issues, Dependencies (SA contribution, not ownership)
- HADI Methodology — Hypothesis → Action → Data → Insights (product thinking model)

---

## Strategy Analysis
> *The "why" before the "what" — every project starts here. Taught after SDLC so you understand which lifecycle phase this work belongs to.*

- AS-IS / Current State analysis
- Problem statement & root cause definition
- TO-BE / Future State definition
- Gap Analysis (current vs desired capabilities)
- Business Model Canvas — 9 blocks, how SA reads it to understand business context before writing specs, BMC vs Business Case
- Feasibility Analysis — operational, technical, financial
- Business Case — structure, what SA contributes (scope, risks, effort estimates)
- Cost-Benefit Analysis (CBA) — structure: one-time costs vs recurring costs vs tangible/intangible benefits; TCO (Total Cost of Ownership) 3-year lifecycle model; how SA contributes effort estimates and operational savings; CBA walkthrough on BookNook domain
- 🔵 Financial modeling for Business Case (NPV, IRR, payback period)
- 🔵 Six Sigma / Lean awareness — DMAIC cycle, waste elimination, process optimization metrics; when process improvement precedes system change (Product SA badge)

### Vendor Management
> *SA contributes to vendor selection when the solution involves buying a product or service — ERP, CRM, cloud platform, third-party API. SA writes the evaluation criteria; procurement and legal own the contract.*

- RFI vs RFP vs RFQ — when each is used and what SA contributes to each
- Vendor evaluation matrix — criteria: functional fit, TCO, vendor stability, SLA, support
- How SA maps functional requirements → evaluation criteria
- SLA negotiation basics — what SA specifies vs what legal owns
- Vendor risk assessment — lock-in, compliance, data residency

---

## Business Process Modeling

### BPMN
**Slides:** [[7-slides/bpmn-a/bpmn-a|BPMN Part A]] · [[7-slides/bpmn-b/bpmn-b|BPMN Part B]]

> *Spiral return: AS-IS / TO-BE introduced conceptually in Strategy Analysis — here you draw them in BPMN notation. Process modeling comes before writing requirements: map how the business works today before specifying what the system must do.*

- Events (Start, End, Intermediate)
- Tasks & Task Types
- Gateways (XOR, AND, OR, Event-based)
- Lanes & Pools
- Sequence Flow & Message Flow
- AS-IS vs TO-BE
- ESIA analysis
- 🔵 IDEF0 Notation — functional decomposition context diagrams (Russian enterprise / legacy systems)

---

## Requirements Engineering
**Slides:** [[7-slides/requirements-engineering-a/requirements-engineering-a|Part A]] · [[7-slides/requirements-engineering-b/requirements-engineering-b|Part B]] · [[7-slides/requirements-engineering-c/requirements-engineering-c|Part C]]

### Requirements Fundamentals
- What is a requirement
- Business vs User vs Functional vs Non-Functional
- Requirements quality criteria (SMART)
- Root Cause Analysis — Fishbone (Ishikawa) diagram, 5-Why technique

### Non-Functional Requirements — Fundamentals
> *Concept introduced here so you can write complete SRS sections from the start. Deep technical coverage (OAuth, OWASP, encryption specs, SLAs) comes after Architecture and API modules.*

- What is a Non-Functional Requirement
- FR vs NFR — the difference and why both matter in a spec
- NFR categories: Performance, Security, Availability, Scalability, Usability, Compliance
- How to write basic NFRs in a User Story or SRS section
- Common mistake: "the system must be fast" vs "response time ≤ 2s at 95th percentile"

### Elicitation Techniques
- Interviews
- Workshops
- Observation
- Surveys
- Document analysis
- Facilitation, Negotiation & Conflict Resolution — managing stakeholder disagreements

### Specification
- User Story (INVEST)
- Job Story
- Acceptance Criteria (Given-When-Then)
- Use Case specification
- SRS / ТЗ document types — BRS, StRS, SRS, ТЗ (ГОСТ 19/34 structure & purpose)
- 🔵 Decision Modeling / Business Rules (DMN) — decision tables, decision trees

> *Data Dictionary and CRUD Matrix require understanding of database entities, attributes, and CRUD operations — covered in the Data Modeling module. Return here after that section.*

### Management
- MoSCoW prioritization
- Kano Model
- MVP definition
- Scope Creep & Change Request
- Requirements Change Management — formal CR process: request → impact assessment → approval → RTM update
- Impact Analysis — assessing downstream effect of changes on other systems and teams
- Requirements Traceability Matrix
- CJM (Customer Journey Map)
- Stakeholder Register *(spiral return — you built the Register in Stakeholder Management; here it integrates with the RTM)*
- Organizational Change Management — what changes when a new system goes live (roles, workflows, responsibilities); SA's role vs Change Manager; change impact assessment; stakeholder communication plan for go-live; training needs analysis (SA writes spec, hands off to trainer)

---

## UML Diagrams

### OOP Basics
**Slides:** [[7-slides/oop-basics/oop-basics|ООП для аналитика]]

- Class vs Object
- Encapsulation
- Inheritance
- Abstraction
- Association, Aggregation, Composition

### Use Case Diagram
**Slides:** [[7-slides/uml-use-case/uml-use-case|Use Case]]

- Actors & System boundary
- Use cases
- Include, Extend, Generalization

### Sequence Diagram
**Slides:** [[7-slides/uml-sequence/uml-sequence|Sequence]]

- Participants & Lifelines
- Synchronous vs Asynchronous messages
- Activation boxes
- Fragments (alt, opt, loop, ref)

### Class Diagram
**Slides:** [[7-slides/uml-class/uml-class|Class Diagram]]

- Class structure (attributes, methods, visibility)
- Relationships & Multiplicity
- *(How Class Diagrams map to SQL tables — covered as the opening bridge in the SQL Basics module)*

### Activity Diagram
**Slides:** [[7-slides/uml-activity/uml-activity|Activity]]

- Actions & Control flow
- Decision nodes
- Swimlanes vs BPMN Lanes

### Component Diagram
**Slides:** [[7-slides/uml-component/uml-component|Component]]

- Components & Interfaces
- 3-tier architecture *(Frontend → Backend → Database — the Client-Server model from SDLC applied to system structure)*
- Microservices view *(awareness — a system split into many small backends instead of one large one; full coverage in System Architecture module)*
- API Gateway, Queue, Cache *(awareness — what these boxes mean; full coverage in API & System Architecture modules)*

### State Machine Diagram
- States & Transitions
- Events & Guards
- When to use vs Activity Diagram (object lifecycle modeling)

### Capstone
**Slides:** [[7-slides/capstone-bookstore/capstone-bookstore|BookNook — все диаграммы на одном домене]]

---

## UX/UI & Prototyping
> *SA produces wireframes as part of requirements — this is not a design skill, it's a requirements tool*

### Wireframing & Prototyping
- Low-fi → Mid-fi → Hi-fi wireframe progression
- Wireframe vs Mockup vs Prototype — definitions and when to use each
- User Flow diagram
- Site Map
- Figma basics — frames, components, auto layout, interactive prototype
- Mobile-first design principles
- Design system basics — what SA needs to know to brief a designer
- Designer brief — how SA hands off to UX/UI designer
- Typography & visual design basics for readability

---

## Data Modeling

### Entity Relationship Diagram (ERD)
**Slides:** [[7-slides/erd/erd|ERD]]

- Entities & Attributes
- Primary Key (Natural vs Surrogate)
- Foreign Key & relationships
- Cardinality (1:1, 1:N, M:N)
- Crow's Foot notation
- Bridge tables

> *Atomic notes for the groups below live in the KB vault (see CLAUDE.md → `KB:` rule). Source MOCs: `KB:01-MOCs/Backend/Databases - MOC.md` · `KB:01-MOCs/Architecture/Software Engineering Principles - MOC.md` · `KB:01-MOCs/Architecture/Distributed Systems - MOC.md`*

### Domain Model
**Slides:** [[7-slides/domain-model/domain-model|Доменная модель]]

- KB:02-Zettelkasten/A domain entity is defined by a continuous identity that persists through state changes.md — entity = identity-based, mutable across its lifecycle
- KB:02-Zettelkasten/A value object has no identity and is compared by the equality of its attributes.md — value object = no identity, immutable, equality by value
- KB:02-Zettelkasten/An aggregate is a cluster of objects treated as one consistency boundary.md — aggregate = one consistency boundary; one transaction modifies one aggregate
- KB:02-Zettelkasten/The aggregate root is the only object outside code may hold a reference to.md — root = single gatekeeper enforcing invariants
- KB:02-Zettelkasten/A domain model captures behavior and rules while a data model captures storage structure.md — domain model vs ERD data model; impedance mismatch

### Database Normalization
- KB:02-Zettelkasten/Normalization eliminates redundancy to prevent insert update and delete anomalies.md — what normalization is + the anomalies it prevents
- KB:02-Zettelkasten/First normal form requires atomic column values with no repeating groups.md — 1NF
- KB:02-Zettelkasten/Second normal form removes partial dependencies on part of a composite key.md — 2NF
- KB:02-Zettelkasten/Third normal form removes transitive dependencies between non-key columns.md — 3NF
- KB:02-Zettelkasten/Boyce-Codd normal form requires every determinant to be a candidate key.md — BCNF
- KB:02-Zettelkasten/Denormalization trades write integrity for read performance by reintroducing redundancy.md — Denormalization (when & why)
- 🔵 KB:02-Zettelkasten/Fourth and fifth normal forms remove multivalued and join dependencies.md — 4NF/5NF awareness

### Database Types & Selection
- KB:02-Zettelkasten/Relational databases enforce a fixed schema and ACID while NoSQL relaxes them for scale.md — relational vs NoSQL trade-off
- KB:02-Zettelkasten/A document database stores self-describing records queried by their nested content.md — document store (MongoDB)
- KB:02-Zettelkasten/A key-value store maps opaque keys to values for the fastest possible lookups.md — key-value store (Redis)
- KB:02-Zettelkasten/A column-family store groups columns into families for wide sparse write-heavy tables.md — wide-column store (Cassandra)
- KB:02-Zettelkasten/A graph database makes relationships first-class for traversal-heavy queries.md — graph DB (Neo4j)
- KB:02-Zettelkasten/Choosing a database means matching its model and guarantees to non-functional requirements.md — NFR → DB selection heuristic
- KB:02-Zettelkasten/CAP theorem forces a partitioned system to choose between consistency and availability.md — CAP: CP vs AP; PACELC
- KB:02-Zettelkasten/Eventual consistency lets replicas accept writes during a partition and converge afterward.md — eventual consistency (the AP model)

### Requirements Artifacts for Data
> *Spiral return: Data Dictionary and CRUD Matrix were flagged in Requirements Engineering. Now that you understand entities, attributes, and CRUD operations, here's how to build them properly.*

- KB:02-Zettelkasten/A data dictionary is the authoritative catalog defining every data element and its rules.md — formal definitions of data elements
- KB:02-Zettelkasten/A CRUD matrix maps entities against operations to expose missing or unowned data lifecycles.md — entity × operation grid

### Data Governance
> *SA writing data requirements needs to know who owns data, what master data is, and how data quality is enforced — otherwise the spec is incomplete.*

- KB:02-Zettelkasten/A data owner is accountable for a data domain while a data steward maintains its quality.md — Data Owner (decides) vs Data Steward (does)
- KB:02-Zettelkasten/Master data management enforces one trusted record for entities shared across systems.md — MDM and the golden record
- KB:02-Zettelkasten/Data quality is measured along completeness accuracy consistency and timeliness.md — four quality dimensions as verifiable requirements
- KB:02-Zettelkasten/Data governance documents the retention archival and deletion rules for each class of data.md — retention/archival/deletion policy
- 🔵 KB:02-Zettelkasten/Process mining reconstructs the real process from event logs to compare against the documented one.md — actual vs documented process (Celonis/ProM, Data SA badge)

---

## SQL
**Slides:** [[7-slides/sql-basics/sql-basics|SQL Basics]] · [[7-slides/sql-cases/README|SQL Cases]]

### Basic SQL
> *Bridge from UML: a Class Diagram becomes a database table. Class name → table name, attributes → columns, primary key attribute → PRIMARY KEY column. The model you drew in UML is the same model you're about to query in SQL.*

- Database structure
- SELECT, FROM, WHERE
- ORDER BY, DISTINCT
- Filtering & sorting

### Joins & Aggregation
- INNER, LEFT, RIGHT, FULL, CROSS JOIN
- Aggregation functions (COUNT, SUM, AVG, MIN, MAX)
- GROUP BY & HAVING
- WHERE vs HAVING

### Advanced SQL
- Subqueries
- Common Table Expressions (CTE)
- Window functions — what they are and when devs use them (ROW_NUMBER, RANK, LAG/LEAD)
- 🔵 Window functions deep practice — running totals, moving averages, ranking (SQL Pro badge)

### Database Objects
- Scalar functions — what they are, when to reference them in requirements
- Stored procedures — conceptual only; SA knows when to ask for them, never writes PL/pgSQL
- Triggers — what they are, implications for data requirements
- Indexes & query optimization

### Transactions
- ACID properties
- 🔵 Isolation levels deep dive — dirty read, phantom read, serializable (SQL Pro badge)
- Locking mechanisms — conceptual awareness for concurrency NFRs

### Database Scaling (Awareness)
- DB Migration — SA's role: data mapping spec, validation rules, rollback criteria
- ETL vs ELT — what SA specifies in migration requirements
- Partitioning & Sharding — what they are, when to specify in NFRs
- Replication — what SA needs to document for availability requirements

---

## API & Integration

### API Fundamentals
**Notion:** [[8-notion/api-fundamentals/api-fundamentals|API Fundamentals]]
- What is API
- API types (Web API, Library API)
- Client-Server model *(spiral return — introduced in SDLC; here: full request/response cycle, statelessness, how APIs are the interface between client and server)*

### Communication Protocols
**Notion:** [[8-notion/real-time-protocols/real-time-protocols|Real-time: Polling, Long Polling, SSE, WebSocket]]
- REST
- SOAP
- WebSocket — when to specify, how to write the NFR (vs polling)
- Long Polling & SSE — three real-time options: polling, SSE, WebSocket — when to use which; Long Polling trade-offs (overhead, gap between requests, ordering, no auto-reconnect)
- Terminology note: only WebSocket is a separate protocol; polling / long polling / SSE are techniques over HTTP
- Gov examples: ЦОН queue board & service status (SSE), госзакупки auction & ЭЦП signing (WebSocket)
- gRPC — what it is, when backend teams choose it, what SA needs to document differently
- GraphQL — REST vs GraphQL trade-offs, what SA specifies differently

### HTTP Protocol
**Notion:** [[8-notion/http-fundamentals/http-fundamentals|HTTP Fundamentals]]
- HTTP methods (GET, POST, PUT, DELETE, PATCH)
- HTTP status codes (2xx, 3xx, 4xx, 5xx)
- Request/Response structure
- Idempotency

### Data Formats
**Notion:** [[8-notion/data-formats/data-formats|Data Formats: JSON & XML]]
- JSON
- XML (SOAP, ШЭП / Smart Bridge, XSD, WSDL, ЭЦП)
- YAML

### Endpoint → JSON → UI *(мостик: собирает HTTP + Data Formats в одну картину)*
**Notion:** [[8-notion/endpoint-to-ui/endpoint-to-ui|Endpoint → JSON → UI]]
- Главная идея: UI = JSON, нарисованный на экране (запрос → JSON → раскладка по элементам)
- Список = массив, деталь = объект; форма/POST разворачивает направление (UI → сервер, 201 назад)
- Коротко: лайк-кнопка, поиск/query-параметры, пагинация «показать ещё»

### API Design
**Notion:** [[8-notion/api-design/api-design|API Design]]
- RESTful principles
- Resource naming & endpoint design
- Versioning
- API documentation (Swagger/OpenAPI)

### API Tools
- Postman (basic) — GET/POST/PUT/DELETE, environments, reading responses, verifying specs
- 🔵 Postman advanced — collection runner, pre-request scripts, mock servers (API Tools badge)
- 🔵 Traffic Sniffers — Charles, Proxyman: intercepting and inspecting real HTTP/HTTPS traffic (API Tools badge)

### Integration Patterns
**Notion:** [[8-notion/async-integration/async-integration|Асинхронные интеграции и Callback]]
- Synchronous vs Asynchronous
- Callback & Webhook — `202 Accepted`, `correlationId`, идемпотентность, таймаут + fallback polling, подпись callback
- Кейс: банк → ШЭП → ГЦВП (endpoints + изменения в БД по шагам)
- Message queues
- Event-driven architecture *(here as an integration pattern — returns in System Architecture as an architectural style)*
- ESB (Enterprise Service Bus)

---

## System Architecture

### Architecture Patterns
- Monolithic
- Microservices *(spiral return from Component Diagram awareness — now the full concept)*
- SOA (Service-Oriented Architecture)
- Event-Driven Architecture *(spiral return from API Integration Patterns — same idea, now as an architectural style not just an integration pattern)*
- Layered architecture

### Architecture Components
- Frontend vs Backend
- API Gateway *(spiral return from Component Diagram awareness)*
- Load balancers
- Caching layers
- Message brokers

### Distributed Systems (Awareness)
- SAGA Pattern — what distributed transactions are, compensating transactions, what SA documents
- High-Level Design — system-level component overview; same as UML Component but at architecture scope
- C4 Model — naming convention for architecture diagrams (Context → Container → Component → Code)
- Load Forecasting — DAU (Daily Active Users — number of unique users who open the product on a given day) × sessions × request size = load estimate; NFR estimation formula *(DAU covered in depth in Business Metrics module)*

### Scalability
- Horizontal vs Vertical scaling
- Stateless vs Stateful services
- CDN

---

## Message Brokers

- What is a message broker — definition, use cases, when to specify one in requirements
- Kafka vs RabbitMQ — conceptual comparison, when to recommend each
- 🔵 Kafka deep dive — topics, partitions, consumer groups, delivery guarantees (Architecture Pro badge)
- 🔵 RabbitMQ deep dive — Exchange types, routing, delivery guarantees (Architecture Pro badge)

---

## Non-Functional Requirements
> *Spiral return: NFR categories introduced in Requirements Engineering Fundamentals. Here you go deep on technical specifics — OAuth flows, encryption standards, SLA numbers — now that you have Architecture, API, and Security vocabulary.*

### Performance
- Response time, Throughput, Latency
- SLA & SLO

### Security
- OWASP Top 10 — 🟡 conceptual awareness for writing security NFRs (injection, XSS, broken auth)
- Authentication vs Authorization
- OAuth 2.0 & JWT — 🟢 OAuth 2.0 Authorization Code flow (diagram, not code) · 🟡 JWT structure only
- Encryption (at rest, in transit) — 🟢 what to specify (AES-256, TLS 1.2+)

### Compliance
- GDPR
- AML/KYC
- PCI DSS

### Availability & Reliability
- Uptime requirements
- Disaster Recovery
- Fault tolerance & Circuit breakers

---

## Testing & QA Collaboration

- UAT Planning — SA's role: defining acceptance criteria, sign-off process, not writing test cases
- QA Collaboration — defect lifecycle, how SA and QA divide responsibilities
- Test coverage for requirements — how to verify each requirement is testable
- API testing basics — using Postman to verify API behavior against spec

---

## Business Metrics

### Financial Metrics
- Revenue, Profit, ROI
- Cost Reduction, Cost of Delay
- 🔵 NPV, IRR, Payback Period — financial appraisal techniques (Product SA badge)

### Product Metrics
- Adoption Rate, Feature Usage, Retention
- Churn Rate, LTV
- DAU / MAU — Daily / Monthly Active Users *(used in Load Forecasting formula in System Architecture)*

### Process Metrics
- Time to Market, Lead Time, Cycle Time
- Rework Rate, Scope Creep Rate

### Customer Metrics
- NPS, CSAT, CES

---

## Monitoring & Observability

### Monitoring Fundamentals
- Logs vs Metrics vs Traces — 🟢 three pillars; what SA specifies for each in observability requirements
- Monitoring vs Observability

### Tools (Awareness)
- Prometheus — metrics types, how to read dashboards, what to specify in NFRs
- Grafana — reading dashboards, what SA looks for
- ELK Stack — Elasticsearch, Logstash, Kibana; conceptual awareness
- 🔵 PromQL & ELK query language — deep dive for SA in DevOps-mature teams (DevOps-Aware SA badge)

### APM
- Distributed tracing
- Error tracking
- Performance bottlenecks

---

## DevOps & Deployment

### CI/CD
- Continuous Integration — what a pipeline does, what SA specifies: deployment requirements, rollback criteria
- Continuous Delivery vs Deployment — conceptual awareness for release planning
- Deployment pipelines — what SA needs to document: environment requirements, rollback plan

### Containerization
- Docker basics — what a container is, what SA specifies: environment parity, resource limits
- Docker Compose — awareness only
- Container orchestration concepts — what SA needs to know for scaling NFRs
- 🔵 Docker hands-on — writing Dockerfiles, running containers (DevOps-Aware SA badge)

### Cloud Basics
- IaaS, PaaS, SaaS
- Cloud deployment models

---

## Documentation & Tools

### Version Control
> *SA uses Git for versioning specs, SRS documents, and BPMN files — not just code. Git introduced here in the tools context; DevOps module covers CI/CD pipelines that use the same Git foundation.*

- Git basics — 🟢 commit, branch, PR; SA uses Git for versioning specs
- Branching strategies
- Pull requests

### SA Documents
- SRS — Software Requirements Specification (structure, key sections)
- ТЗ (Technical Specification) — ГОСТ 19 / ГОСТ 34 structure; Russian enterprise standard
- BRD — Business Requirements Document
- Requirements Traceability Matrix
- 🔵 Full ГОСТ depth — all clauses, formal sign-off procedures (Enterprise Modeling badge)

### Collaboration Tools
- Confluence — pages, spaces, requirements documentation workflow; Russian market standard
- Jira *(covered in SDLC / Task Management — here: how Jira tickets link to Confluence pages in a documentation workflow)*

---

## Analyst Tooling

### AI Chatbots
- What is a Large Language Model (LLM)
- ChatGPT — use cases for analysts (drafting, brainstorming, explaining)
- Claude.ai — long context, document analysis, structured thinking
- Prompting basics (zero-shot, few-shot, chain-of-thought)
- Limitations: hallucination, no real-time data, context window
- When to use chatbots vs when to verify manually

### AI for SA Workflows
- Requirements drafting with AI — User Stories, Use Cases, FR/NFR generation
- Diagram generation with AI — UML, BPMN, ERD via prompt
- SQL query writing & optimization with AI
- API documentation generation (Swagger/OpenAPI) with AI
- SRS/ТЗ document drafting with AI
- GPT agent creation — building a custom assistant for repetitive SA tasks
- AI for meetings — transcription, action item extraction, summary generation
- n8n automation — connecting AI to Jira, Confluence, Telegram

### AI Coding Agents
- What makes a coding agent different from a chatbot
- Claude Code — terminal-based agent, reads your entire codebase/vault, executes tasks
- Cursor — AI-native IDE, autocomplete + inline agent
- GitHub Copilot — IDE assistant, code suggestions
- Agentic workflows: file editing, running scripts, multi-step automation
- Use cases for analysts: auto-generate docs, run SQL, build diagrams, manage Obsidian vault

### Diagramming Tools
- **Excalidraw** — freehand whiteboard, frames → presentation, images/GIFs, hotlinks; primary tool for this course
- **Draw.io (diagrams.net)** — structured UML/BPMN/ERD, exportable XML, integrates with Confluence/Notion
- **Figma** — wireframing, prototyping, designer handoff
- **Miro** — collaborative whiteboard, templates, sticky notes; great for workshops
- **Lucidchart** — professional diagramming, real-time collaboration, Jira/Confluence integration
- **PlantUML** — text-to-diagram (code → UML/BPMN), version-control friendly
- **Mermaid.js** — markdown-embedded diagrams, renders in GitHub/Obsidian/Notion
- When to use which tool (whiteboarding vs documentation vs collaboration vs code-first)

### Obsidian as AI Command Center
- What is Obsidian — local-first markdown knowledge base
- Obsidian as Single Source of Truth (SSOT) for BRD, SRS, notes
- Bidirectional linking: connect requirements → stakeholders → components
- Context injection: Claude Code scans vault → understands full project scope
- **AI-powered documentation:** feed meeting notes → Claude drafts SRS/BRD → export via `python-docx` / `reportlab`
- **Diagram generation:** Claude writes PlantUML / Mermaid scripts embedded in `.md` files
- **Excalidraw in Obsidian:** embed drawings in BRD/SRS with `![[Drawing Name]]`
- **Interactive roadmap:** Excalidraw shapes as hotlinks → markdown notes, PDFs, web resources
- **Beautiful Navigator:** drag markdown files onto canvas → live-updating windows inside diagram
- Back-of-card metadata: hide technical details behind visual elements (clean front view)
- Folder conventions: `drawings/` + `docs/` interconnected via relative links → Claude can crawl & index

---

## Career Preparation

### Documentation Skills
- Technical writing
- Confluence/Wiki management
- Diagramming tools (Draw.io, Miro, Figma)

### Communication
- Stakeholder communication
- Technical vs non-technical
- Soft Skills — workshop facilitation, negotiation, conflict resolution with stakeholders

### Portfolio
- Sample BPMN, ERD, API docs, SQL
- Sample wireframes (Figma)
- Sample SRS / ТЗ document
- Case studies

### Interview Preparation
- Common SA questions
- Behavioral & technical
- Case study preparation
- 🔵 BABOK Guide awareness — IIBA's Business Analysis Body of Knowledge: 6 knowledge areas, key techniques, how it maps to this course; CBAP/CCBA certification overview (Western BA Track badge)

---

## Bonus Tracks

> Optional modules — earn specialization badges. Completing all = **Senior-Ready** certificate.

| Badge | Topics |
|---|---|
| 🏅 **SQL Pro** | Window Functions deep practice, Isolation levels deep dive |
| 🏅 **API Tools** | Traffic sniffers (Charles, Proxyman), Advanced Postman |
| 🏅 **Enterprise Modeling** | IDEF0, DMN/Business Rules, Full ГОСТ ТЗ depth, ArchiMate (enterprise architecture notation, TOGAF-aligned; used in large EU/DE enterprises) |
| 🏅 **Architecture Pro** | Kafka deep dive, RabbitMQ deep dive, CAP deep dive, Load Forecasting math |
| 🏅 **Data SA** | Power BI / Excel Pivot, NoSQL schema design, ETL/ELT pipelines, Process Mining (Celonis/ProM — discover actual vs documented processes from event logs) |
| 🏅 **Product SA** | Full Business Case (NPV/IRR), HADI deep dive, Strategy Analysis depth, Six Sigma / Lean awareness (DMAIC, waste elimination, process optimization metrics) |
| 🏅 **DevOps-Aware SA** | Docker hands-on, PromQL & ELK queries, CI/CD pipeline reading, ITIL / ITSM awareness (incident/change management gates, Change Advisory Board — how SA submits Change Requests in enterprise contexts) |
| 🏅 **Western BA Track** | BABOK Guide awareness (IIBA standard, knowledge areas, certification prep — for SA targeting Western BA roles) |
