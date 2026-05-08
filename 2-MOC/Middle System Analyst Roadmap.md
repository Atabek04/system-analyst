## Introduction to System Analysis

### Role & Responsibilities

- [[SA role and responsibilities]] - SA definition, responsibilities, and career evolution
- [[IT roles and hierarchy]] - Development, leadership, and analyst roles; key role differentiations
- [[Stakeholder identification and management]] - Stakeholder frameworks and management strategies

---

## Software Development Life Cycle (SDLC)

### SDLC Stages & Methodologies

- [[SDLC и методологии разработки]] - Полный жизненный цикл разработки ПО (7 фаз с участниками и артефактами), история методологий (Waterfall миф и реальность, Agile как возврат к истокам), практические кейсы выбора методологии (40 слайдов по Сократовскому методу)
- [[Methodologies-Slides]] - Методологии разработки (слайды по Сократовскому методу):
  - SDLC vs Методология (ингредиенты vs рецепт)
  - Waterfall (последовательные фазы, когда подходит)
  - Agile (итерации, фидбек, примеры с интернет-магазином и машиной)
  - Waterfall vs Agile сравнение (таблица критериев)
  - Scrum (роли: PO/SM/Dev Team, церемонии: Planning/Standup/Review/Retro/Refinement, артефакты: Product Backlog/Sprint Backlog/Increment)
  - Kanban (непрерывный поток, WIP-лимиты, Scrum vs Kanban, Scrumban)
- [[Task-Management-Slides]] - Управление задачами (34 слайда по Сократовскому методу):
  - Зачем оценивать задачи (проблема оценки в часах, относительная оценка)
  - Story Points (шкала Fibonacci, SP vs часы, T-shirt Sizing)
  - Planning Poker (Anchoring Bias, одновременное раскрытие, обсуждение расхождений)
  - Velocity (расчёт, предсказание сроков, стабилизация за 3-5 спринтов, почему не KPI)
  - Definition of Done vs Acceptance Criteria (чеклист качества vs условия приёмки)
  - Jira (Epic/Story/Task/Sub-task/Bug, Sprint Board, JQL-запросы)

---

## Requirements Engineering

### Slides (Marp PDF)

- [[7-slides/requirements-engineering-a/requirements-engineering-a|Требования: Что это и Какие бывают]] (20 слайдов)
  - Зачем нужны требования (кейс "это не то что я хотел")
  - Определение требования (измеримое, проверяемое, однозначное)
  - Пирамида: Business → User → FR + NFR

- [[7-slides/requirements-engineering-b/requirements-engineering-b|Сбор и Описание требований]] (26 слайдов)
  - 5 техник сбора (интервью, воркшоп, наблюдение, опросы, документы)
  - User Story (формат, INVEST, хорошие vs плохие)
  - Job Story, Acceptance Criteria (Given-When-Then)

- [[7-slides/requirements-engineering-c/requirements-engineering-c|Управление требованиями]] (29 слайдов)
  - Приоритизация (MoSCoW, Kano Model)
  - MVP (скейтборд → машина)
  - Scope Creep, Change Request Process
  - CJM, Requirements Traceability, Stakeholder Register

### Source (Canva format)

- [[Requirements-Engineering-Slides]] - Оригинал для Canva (64 слайда)

---

## Business Process Modeling

### BPMN (Business Process Model and Notation)

- [[7-slides/bpmn-a/bpmn-a|BPMN: Как показать процесс]] — Start/End Events, Tasks, Flows, Timer Event, Message Events; единый сценарий: оформление кредита
- [[7-slides/bpmn-b/bpmn-b|BPMN: Кто что делает и как улучшить]] — Gateways (XOR, AND, OR, Event-based), Lanes, Pools, Task Types, AS-IS/TO-BE, ESIA, метрики процесса

---

## UML Diagrams

### Use Case Diagram

- [[7-slides/uml-use-case/uml-use-case|UML: Use Case Diagram]] — Actors, system boundaries, relationships (include, extend, generalization)

### Sequence Diagram

- [[7-slides/uml-sequence/uml-sequence|UML: Sequence Diagram]] — Participants, sync/async messages, lifelines, activation boxes

### OOP Basics (фундамент для Class Diagram, ERD, SQL)

- [[7-slides/oop-basics/oop-basics|ООП: основы для аналитика]] — Class vs Object, атрибуты и типы, Encapsulation, Inheritance, Association/Aggregation/Composition, Abstraction

### Class Diagram

- [[7-slides/uml-class/uml-class|UML: Class Diagram]] — Классы, атрибуты, методы, связи, Inheritance, Multiplicity, Visibility

### Activity Diagram

- [[7-slides/uml-activity/uml-activity|UML: Activity Diagram]] — Краткий обзор; сравнение с BPMN (swimlanes = Lanes, Decision = Gateway)

### Component Diagram

- [[7-slides/uml-component/uml-component|UML: Component Diagram]] — Сервисы, протоколы, 3-tier, микросервисы, API Gateway, Queue, Cache; сравнение с Class/Deployment

### Capstone — собрать всё вместе

- [[7-slides/capstone-bookstore/capstone-bookstore|Capstone: BookNook]] — Один домен (книжный магазин) через 6 диаграмм: Use Case → BPMN → Component → Class → ERD → Sequence

---

## Data Modeling

### Entity Relationship Diagram (ERD)

- [[7-slides/erd/erd|ERD: Entity-Relationship Diagram]] — Entity, Attribute, PK/FK (Natural vs Surrogate), 1:1/1:N/M:N, Crow's Foot, bridge-таблицы, ERD vs Class Diagram

### Domain Model

- Domain entities
- Value objects
- Aggregates

### Database Normalization

- 1NF (First Normal Form)
- 2NF (Second Normal Form)
- 3NF (Third Normal Form)
- BCNF (Boyce-Codd Normal Form)
- Denormalization (when and why)

---

## SQL

### Basic SQL

- Database structure
- SELECT statements
- WHERE clause
- ORDER BY
- DISTINCT
- Filtering and sorting

### Advanced SQL

- JOINs (INNER, LEFT, RIGHT, FULL, CROSS)
- USING and NATURAL JOIN
- Aggregation functions (COUNT, SUM, AVG, MIN, MAX)
- GROUP BY and HAVING
- WHERE vs HAVING
- Subqueries
- Common Table Expressions (CTE)

### Database Functions

- Scalar functions
- Table-valued functions
- IN, OUT, DEFAULT parameters
- Stored procedures

### Database Optimization

- Indexes
- Query optimization
- Execution plans

### Transactions

- ACID properties
- Transaction isolation levels
- Locking mechanisms

---

## API & Integration

### API Fundamentals

- What is API
- API types (Web API, Library API)
- Client-Server communication

### Communication Protocols

- REST (Representational State Transfer)
- SOAP (Simple Object Access Protocol)
- WebSocket
- gRPC
- GraphQL

### HTTP Protocol

- HTTP methods (GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD)
- HTTP status codes (2xx, 3xx, 4xx, 5xx)
- Request/Response structure
- Headers
- Idempotency

### Data Formats

- JSON
- XML
- YAML

### API Design

- RESTful API principles
- Resource naming
- Endpoint design
- Versioning strategies
- API documentation

### API Tools

- Postman for testing
- Swagger/OpenAPI specification
- API mocking

### Integration Types

- Synchronous integration
- Asynchronous integration
- Message queues
- Event-driven architecture
- ESB (Enterprise Service Bus)

### Advanced Integration

- Redis for caching
- ElasticSearch
- Kibana
- WebSocket for real-time communication

---

## System Architecture

### Architecture Patterns

- Monolithic architecture
- Microservices architecture
- Service-Oriented Architecture (SOA)
- Event-Driven Architecture
- Layered architecture

### Architecture Components

- Frontend vs Backend
- API Gateway
- Load balancers
- Caching layers
- Message brokers

### Scalability & Performance

- Horizontal vs Vertical scaling
- Stateless vs Stateful services
- CDN (Content Delivery Network)

---

## Non-Functional Requirements

### Performance

- Response time
- Throughput
- Latency
- SLA (Service Level Agreement)
- SLO (Service Level Objective)

### Security

- OWASP Top 10
- Authentication vs Authorization
- OAuth 2.0
- JWT tokens
- Encryption (at rest, in transit)
- HTTPS/TLS

### Compliance & Regulations

- GDPR
- AML/KYC (for fintech)
- PCI DSS (for payment systems)
- Data retention policies

### Availability & Reliability

- Uptime requirements
- Disaster recovery
- Backup strategies
- Fault tolerance
- Circuit breakers

### Usability

- Accessibility standards (WCAG)
- Internationalization (i18n)
- Localization (l10n)
- Responsive design

---

## Business Metrics

### Financial Metrics

- Revenue (Выручка)
- Profit (Прибыль, маржинальность)
- ROI (Return on Investment)
- Cost Reduction (Снижение затрат)
- Cost of Delay

### Product Value Metrics

- Adoption Rate
- Feature Usage
- Retention
- Churn Rate
- LTV (Lifetime Value)

### Speed & Time Metrics

- Time to Market
- Lead Time
- Cycle Time
- Release Frequency

### Requirements Quality Metrics

- Rework Rate
- Change Requests Count
- Defects due to Requirements
- Scope Creep Rate

### Customer Metrics

- NPS (Net Promoter Score)
- CSAT (Customer Satisfaction Score)
- CES (Customer Effort Score)

### Process & Operational Efficiency

- Process Cycle Time
- Automation Rate
- Throughput
- SLA/OLA Compliance

### Risk & Compliance Metrics

- Risk Impact
- Compliance Incidents
- Fraud Rate

---

## Monitoring & Observability

### Monitoring Fundamentals

- What is monitoring
- Logs vs Metrics vs Traces
- Monitoring vs Observability
- Key metrics to monitor (CPU, Memory, Disk, Network)

### Prometheus

- What is Prometheus
- Time-series data
- PromQL (Prometheus Query Language)
- Metrics types (Counter, Gauge, Histogram, Summary)
- Exporters
- Alerting rules

### Grafana

- What is Grafana
- Creating dashboards
- Data sources integration
- Visualization types
- Alerting in Grafana
- Dashboard best practices

### Logging

- Centralized logging
- Log levels
- ELK Stack (Elasticsearch, Logstash, Kibana)

### Application Performance Monitoring (APM)

- Distributed tracing
- Error tracking
- Performance bottlenecks

---

## DevOps & Deployment

### Version Control

- Git basics
- Branching strategies
- Pull requests and code reviews

### CI/CD

- Continuous Integration
- Continuous Deployment
- Continuous Delivery
- Deployment pipelines

### Containerization

- Docker basics
- Docker Compose
- Container orchestration concepts

### Cloud Basics

- Cloud service models (IaaS, PaaS, SaaS)
- Cloud deployment models
- Common cloud providers

---

## Career Preparation

### Documentation Skills

- Technical writing
- Documentation standards
- Confluence/Wiki management
- Diagramming tools ([Draw.io](http://Draw.io), Lucidchart, Miro)

### Communication Skills

- Stakeholder communication
- Requirements elicitation
- Presentation skills
- Technical vs non-technical communication

### Portfolio Development

- Sample projects
- BPMN diagrams
- ERD diagrams
- API documentation
- SQL queries
- Case studies

### Interview Preparation

- Resume/CV optimization
- Common SA interview questions
- Behavioral questions
- Technical questions
- Case study preparation
- Mock interviews

### Continuous Learning

- Industry trends
- New technologies
- Certifications (IIBA, PMI-PBA, etc.)
- Professional communities