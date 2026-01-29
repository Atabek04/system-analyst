## Introduction to System Analysis

### Role & Responsibilities

- [[SA role and responsibilities]] - SA definition, responsibilities, and career evolution
- [[IT roles and hierarchy]] - Development, leadership, and analyst roles; key role differentiations
- [[Stakeholder identification and management]] - Stakeholder frameworks and management strategies
- [[Job market and career entry for SA]] - Kazakhstan market analysis and entry strategy

### Learning Methodology & Mindset

- [[Mindset Foundations]] - Growth vs fixed mindset, safe learning environment, Socratic method
- [[Why People Don't Finish]] - Clear goals, discipline, plateau of latent potential
- [[How We Learn]] - Theory vs practice, spaced repetition, Anki + Kahoot

### IT Fundamentals

Todo:
- You should love your job
- to love your job you should know its history
- history of computers and programming languages
	- tuning machine and etc.
	- does they had CPU?
	- how it worked?
- Why 0 and 1 ? how it works in hardware
- Why we need programming languages
- Explain how all trillion dollar industries are built upon these computers
- Startuper may have only laptop and writing code become a millionere or even billionere
- AI and technology is being integrated everyhwere, so we always need SA

#### Computer Architecture

- CPU, RAM, Storage
- Data processing basics
- Client-Server architecture

#### Networking Basics

- Internet fundamentals
- IP addresses and DNS
- TCP vs UDP
- HTTP/HTTPS1
- Ports and protocols

---

## Software Development Life Cycle (SDLC)

### SDLC Stages

- Requirements gathering
- Design
- Development
- Testing
- Deployment
- Maintenance
- Evolution/Retirement

### Development Methodologies

- Waterfall
- Agile principles and manifesto
- Comparison of methodologies

---

## Agile & Scrum

### Agile Principles

- Agile manifesto
- Core values and principles

### Scrum Framework

- Roles (Product Owner, Scrum Master, Development Team)
- Artifacts (Product Backlog, Sprint Backlog, Increment)
- Ceremonies (Sprint Planning, Daily Standup, Sprint Review, Sprint Retrospective)
- Definition of Done
- Backlog grooming/refinement

### Kanban

- Kanban principles
- Kanban board structure
- WIP limits
- Comparison with Scrum

### Task Management

- Task estimation techniques
- Story points vs hours
- Velocity tracking
- Working with Jira

---

## Requirements Engineering

### Requirements Classification (BACC Framework)

- Business requirements
- User requirements
- Functional requirements
- Non-functional requirements (NFR)
- System boundaries

### Requirements Gathering Techniques

- Stakeholder interviews
- Workshops
- Surveys vs interviews
- Observation
- Document analysis

### Requirements Documentation

- User Story format (As a... I want... So that...)
- Job Story format
- Acceptance criteria
- Customer Journey Map (CJM)
- Stakeholder Register

### Requirements Management

- MVP formation
- Requirements prioritization (MoSCoW, Kano, etc.)
- Conflicting requirements resolution
- Completeness check
- Change requests management
- Scope creep prevention
- Requirements traceability

---

## Business Process Modeling

### BPMN (Business Process Model and Notation)

- What is BPMN
- AS-IS vs TO-BE processes
- Tasks, Events, Flows
- Gateways (XOR, OR, AND)
- Pools and Lanes
- Subprocess
- Common BPMN patterns
- Process optimization

### Process Analysis

- Process cycle time
- Bottleneck identification
- Automation opportunities

---

## UML Diagrams

### UML Overview

- Structural vs Behavioral diagrams
- When to use which diagram

### Use Case Diagram

- Actors
- Use cases
- Relationships (include, extend, generalization)
- System boundaries

### Sequence Diagram

- Participants/Objects
- Messages (synchronous, asynchronous)
- Lifelines
- Activation boxes
- Combined fragments

### Class Diagram

- Classes, attributes, methods
- Relationships (association, aggregation, composition)
- Inheritance
- Multiplicity
- Visibility modifiers

### Activity Diagram

- Activities and actions
- Decision nodes
- Fork and join
- Swimlanes

---

## Data Modeling

### Entity Relationship Diagram (ERD)

- Entities and attributes
- Relationships (1:1, 1:M, M:M)
- Primary key
- Foreign key
- Surrogate key
- Cardinality

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