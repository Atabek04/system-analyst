# Flashcard Syntax Reference

## Note Type: Coding Questions

Fields: `Front`, `Back`

**Anki setup:** Tools → Manage Note Types → Add → Blank → Name: `Coding Questions` → Fields: Front, Back → Cards: Front `{{Front}}`, Back `{{Back}}`

---

## Deck Hierarchy

All decks live under the `System Analyst` parent deck, mirroring the MOC structure.

### Introduction to System Analysis

```
System Analyst::Intro::Role & Responsibilities
System Analyst::Intro::Learning Methodology
System Analyst::Intro::IT Fundamentals
System Analyst::Intro::Computer Architecture
System Analyst::Intro::Binary & Physical Computing
System Analyst::Intro::Hardware to Software
System Analyst::Intro::Networking Basics
```

### SDLC & Methodologies

```
System Analyst::SDLC::Stages & Methodologies
System Analyst::SDLC::Agile & Scrum
System Analyst::SDLC::Kanban
System Analyst::SDLC::Task Management
System Analyst::SDLC::Story Points & Velocity
System Analyst::SDLC::Jira
```

### Requirements Engineering

```
System Analyst::Requirements::Fundamentals
System Analyst::Requirements::Types (BR, UR, FR, NFR)
System Analyst::Requirements::Elicitation Techniques
System Analyst::Requirements::User Story & INVEST
System Analyst::Requirements::Acceptance Criteria
System Analyst::Requirements::Prioritization (MoSCoW, Kano)
System Analyst::Requirements::MVP & Scope Creep
System Analyst::Requirements::CJM & Traceability
```

### Business Process Modeling

```
System Analyst::BPMN::Fundamentals
System Analyst::BPMN::Tasks & Events
System Analyst::BPMN::Gateways
System Analyst::BPMN::Pools & Lanes
System Analyst::BPMN::Process Analysis
```

### UML Diagrams

```
System Analyst::UML::Overview
System Analyst::UML::Use Case Diagram
System Analyst::UML::Sequence Diagram
System Analyst::UML::Class Diagram
System Analyst::UML::Activity Diagram
```

### Data Modeling

```
System Analyst::Data Modeling::ERD
System Analyst::Data Modeling::Domain Model
System Analyst::Data Modeling::Normalization
```

### SQL

```
System Analyst::SQL::Basic SQL
System Analyst::SQL::JOINs
System Analyst::SQL::Aggregation & Grouping
System Analyst::SQL::Subqueries & CTE
System Analyst::SQL::Functions & Procedures
System Analyst::SQL::Indexes & Optimization
System Analyst::SQL::Transactions & ACID
```

### API & Integration

```
System Analyst::API::Fundamentals
System Analyst::API::HTTP Protocol
System Analyst::API::REST
System Analyst::API::Data Formats (JSON, XML, YAML)
System Analyst::API::API Design
System Analyst::API::Tools (Postman, Swagger)
System Analyst::API::Integration Types
System Analyst::API::Advanced (WebSocket, gRPC, GraphQL)
```

### System Architecture

```
System Analyst::Architecture::Patterns
System Analyst::Architecture::Components
System Analyst::Architecture::Scalability
```

### Non-Functional Requirements

```
System Analyst::NFR::Performance
System Analyst::NFR::Security
System Analyst::NFR::Compliance
System Analyst::NFR::Availability & Reliability
System Analyst::NFR::Usability
```

### Business Metrics

```
System Analyst::Metrics::Financial
System Analyst::Metrics::Product Value
System Analyst::Metrics::Speed & Time
System Analyst::Metrics::Requirements Quality
System Analyst::Metrics::Customer
System Analyst::Metrics::Process Efficiency
```

### Monitoring & Observability

```
System Analyst::Monitoring::Fundamentals
System Analyst::Monitoring::Prometheus
System Analyst::Monitoring::Grafana
System Analyst::Monitoring::Logging & ELK
```

### DevOps & Deployment

```
System Analyst::DevOps::Git
System Analyst::DevOps::CI-CD
System Analyst::DevOps::Docker
System Analyst::DevOps::Cloud Basics
```

---

## File Header

```markdown
TARGET DECK: System Analyst::Requirements::User Story & INVEST
Tags: requirements user-story
**Related:** [[User Story формат и INVEST]]
```

---

## START/END Block Format

### One-liner

```markdown
START
Coding Questions
Что такое User Story?
Back: Краткое описание функциональности с точки зрения пользователя в формате: "Как [роль], я хочу [действие], чтобы [ценность]"
Tags: requirements user-story
<!--ID: 1771415062868-->
END
```

### Multi-line

```markdown
START
Coding Questions
Что означает каждая буква в INVEST для User Story?
Back:
- **I**ndependent — независима от других историй
- **N**egotiable — обсуждаема, не контракт
- **V**aluable — приносит ценность пользователю
- **E**stimable — можно оценить объём работы
- **S**mall — достаточно маленькая для спринта
- **T**estable — можно проверить результат
Tags: requirements user-story invest
<!--ID: 1771415062870-->
END
```
