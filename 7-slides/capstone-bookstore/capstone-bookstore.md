---
marp: true
theme: default
paginate: true
header: "System Analyst Bootcamp"
footer: "Capstone: BookNook — онлайн-магазин книг"
style: |
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&family=JetBrains+Mono&family=Source+Serif+4:wght@400;600&family=Dancing+Script:wght@400;700&display=swap');
  section { font-family: 'Ubuntu', sans-serif; background: #F9F5F0; color: #424242; padding: 40px; }
  h1 { color: #2C3E50; border-bottom: 3px solid #3498DB; padding-bottom: 10px; }
  h2 { color: #2C3E50; }
  strong { color: #E74C3C; }
  code { font-family: 'JetBrains Mono', monospace; background: #EDEAE5; padding: 2px 8px; border-radius: 4px; color: #424242; }
  pre { background: #2C3E50; color: #F9F5F0; padding: 20px; border-radius: 8px; }
  pre code { background: transparent; color: inherit; }
  blockquote { border-left: 4px solid #3498DB; padding-left: 20px; color: #6B6B6B; font-style: italic; }
  table { width: 100%; border-collapse: collapse; }
  th { background: #2C3E50; color: #F9F5F0; padding: 12px; }
  td { border: 1px solid #DCDCDC; padding: 10px; }
  section.lead { display: flex; flex-direction: column; justify-content: center; text-align: center; }
  section.lead h1 { border-bottom: none; padding-bottom: 0; }
  section.lead strong { font-size: 1.4em; color: #2C3E50; }
  section.title { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 60px; }
  section.title header, section.title footer { display: none; }
  section.title .course { font-family: 'Source Serif 4', serif; font-size: 45px; font-weight: 600; color: #2C3E50; margin-bottom: 8px; }
  section.title .author { font-family: 'Source Serif 4', serif; font-size: 25px; font-weight: 400; color: #6B6B6B; margin-bottom: 40px; }
  section.title h1 { font-family: 'Dancing Script', cursive; font-size: 75px; font-weight: 400; color: #2C3E50; border-bottom: none; padding-bottom: 0; margin: 0; }
---

<!-- _class: title -->
<!-- _paginate: skip -->

<div class="course">CAPSTONE PROJECT</div>
<div class="author">presented by Ayub</div>

# BookNook
## Онлайн-магазин книг

---

# Зачем нам этот проект

Раньше мы учили нотации **по одной**. Сейчас — соберём всё вместе.

**Цель:** на одном домене (книжный магазин) показать, как **одна и та же система** выглядит в **разных диаграммах**.

| Диаграмма | Что покажет |
|---|---|
| Use Case | Кто и что делает в системе |
| BPMN | Как идёт процесс заказа |
| Component | Сервисы и их связи |
| Class | Структура кода |
| ERD | Структура БД |
| Sequence | Поток сообщений при покупке |

> Это не разные системы. Это **разные взгляды** на одну.

---

# Постановка задачи

**BookNook** — онлайн-магазин книг.

**Что должна делать система:**
- Покупатель ищет книги по названию / автору / жанру
- Видит описание, обложку, отзывы
- Добавляет в корзину, оформляет заказ
- Платит картой (через Stripe)
- Получает email о статусе заказа
- Может оставить отзыв после доставки

**Роли:** Покупатель, Администратор (управляет каталогом), Курьер (отмечает доставку).

---

# Артефакты SA: цепочка

```
Требования  →  Use Case  →  BPMN
                  ↓
              Component
                  ↓
         Class  →  ERD
                  ↓
              Sequence
                  ↓
              API contracts
```

> Каждый артефакт **дополняет**, а не заменяет предыдущий.

---

# Этап 1: Use Case Diagram

---

# Use Case — кто и что делает

![bg right:55%](img/cap-usecase.png)

**Акторы:** Покупатель, Администратор, Курьер, Stripe (внешний).

**Use Cases:**
- Искать книги, Просмотреть книгу, Добавить в корзину
- Оформить заказ → `<<include>>` Оплатить
- Применить промокод → `<<extend>>` к "Оформить заказ"
- Оставить отзыв
- Управлять каталогом (Admin)
- Подтвердить доставку (Курьер)

---

# Что мы извлекли из Use Case

- **3 пользовательских роли** + 1 внешний сервис
- **8 ключевых функций** системы
- Видим, что "Оплата" — обязательная часть оформления
- "Промокод" — необязательная фича (extend)

> Use Case — словарь, на котором SA говорит с заказчиком.

---

# Этап 2: BPMN — процесс заказа

---

# Процесс "Оформить заказ"

![bg right:55%](img/cap-bpmn.png)

**Pool: BookNook**

- **Lane Покупатель**: Положить в корзину → Оформить → Оплатить
- **Lane Order Service**: Создать заказ → Запросить оплату → Подтвердить → Передать курьеру
- **Lane Stripe**: Провести платёж

XOR-шлюз: Оплата прошла? → да / нет.

---

# Что мы извлекли из BPMN

- **Где границы зон ответственности** (Lanes)
- Где **внешние взаимодействия** (Stripe — отдельный pool)
- Где **точки отказа** (оплата может не пройти → отмена)
- Где **асинхронные** шаги (передача курьеру — не сразу)

> BPMN — для разговоров с **бизнесом** и **процесс-оунерами**.

---

# Этап 3: Component Diagram

---

# Архитектура BookNook

![bg right:55%](img/cap-component.png)

**Компоненты:**
- Web / Mobile → API Gateway
- Catalog Service (+ Redis cache + PostgreSQL)
- Order Service (+ PostgreSQL)
- Payment Service → Stripe
- Notification Service (через Kafka)
- Review Service

---

# Что мы извлекли из Component

- **Каждый бизнес-домен** → отдельный сервис
- **Своя БД** у каждого сервиса
- **Kafka** — асинхронная связь Order → Notification
- **Stripe** — внешняя зависимость (риск + цена)
- **Redis** — кэш каталога (NFR: время ответа)

> Component — для разговоров с **архитектором и DevOps**.

---

# Этап 4: Class Diagram

---

# Class Diagram — Order Service

![bg right:55%](img/cap-class.png)

Внутри сервиса заказов:

- `Order` — заказ
- `OrderLine` — строка заказа (Composition к Order)
- `Customer` — покупатель
- `Book` — товар (через ID, отдельный сервис каталога)
- `Payment` — запись о платеже
- `Address` — адрес доставки

---

# Что мы извлекли из Class Diagram

- **Composition**: `Order` ◆── `OrderLine` (удалили заказ → строки исчезли)
- **Aggregation**: `Order` ◇── `Address` (адрес может быть переиспользован)
- **Methods**: `Order.cancel()`, `Order.markPaid()`, `Order.totalAmount()`

> Class Diagram — для разговоров с **разработчиками**.

---

# Этап 5: ERD — структура БД

---

# ERD — order_db и catalog_db

![bg right:55%](img/cap-erd.png)

**order_db:**
- `customers` (id, name, email)
- `orders` (id, customer_id FK, date, status, total)
- `order_lines` (id, order_id FK, book_id, quantity, price)
- `payments` (id, order_id FK, stripe_id, status)

**catalog_db:**
- `books`, `authors`, `genres`, `book_authors`, `book_genres`

---

# M:N в каталоге

```
Book (1) ──< book_authors >── (1) Author
Book (1) ──< book_genres  >── (1) Genre
```

- `book_authors` — bridge для соавторства
- `book_genres` — bridge: одна книга в нескольких жанрах

> Те же концепции из Class Diagram — но в форме **таблиц с FK**.

---

# Этап 6: Sequence — оформление заказа

---

# Поток сообщений "Оплатить заказ"

![bg right:55%](img/cap-sequence.png)

1. Customer → Web: "Оформить заказ"
2. Web → API Gateway → Order Service: `POST /orders`
3. Order Service → Payment Service: `charge(order_id, amount)`
4. Payment Service → Stripe: HTTPS API
5. Stripe → Payment Service: `succeeded`
6. Order Service → Kafka: `OrderPaid` event
7. Notification Service ← Kafka: → Email Provider
8. Customer ← Email: "Заказ оплачен"

---

# Что мы извлекли из Sequence

- **Точные API-вызовы** между сервисами
- **Синхронные** (HTTP) vs **асинхронные** (Kafka) шаги
- **Тайминг**: что блокирует пользователя (оплата), что нет (email)
- Основа для **API contracts** (OpenAPI / Swagger)

> Sequence — для разговоров с **разработчиками и интеграторами**.

---

# Этап 7: Связь между диаграммами

---

# Один объект — в каждой диаграмме

| Диаграмма | "Заказ" выглядит как |
|---|---|
| Use Case | "Оформить заказ" |
| BPMN | Цепочка задач от корзины до оплаты |
| Component | Внутренний state в Order Service |
| Class | Класс `Order` с методами |
| ERD | Таблица `orders` со связями |
| Sequence | Сообщение `POST /orders` |

> Один и тот же объект — **6 разных описаний** для **6 разных собеседников**.

---

# Когда какую диаграмму использовать

| Собеседник | Что показать |
|---|---|
| Заказчик / PO | Use Case + BPMN |
| Архитектор | Component |
| Разработчик | Class + Sequence |
| DBA | ERD |
| QA / Тестер | Sequence + Use Case |
| DevOps | Component + Deployment |

---

<!-- _class: lead -->

# Финальная микропрактика — 30 минут

Возьми **другой домен**: онлайн-кинотеатр / доставка еды / онлайн-курсы.

Нарисуй **минимум 4 из 6 диаграмм** для одного и того же домена:

1. Use Case (минимум 5 use cases)
2. ERD (минимум 5 entity, минимум 1 M:N)
3. Component (минимум 4 сервиса)
4. Sequence (один ключевой поток)

**Защита:** объясни решения за 5 минут.

<!--
Teacher Notes:
- Это домашнее или групповое задание.
- Подсказки давать только по запросу.
- Главное в защите: не "что нарисовано", а "почему именно так".
-->

---

# Чек-лист хорошей капстон-работы

- [ ] **Один домен** проходит через все диаграммы
- [ ] Имена сущностей **совпадают** между Class и ERD
- [ ] В Component указаны **протоколы** на стрелках
- [ ] У ERD есть **PK + FK + кардинальность**
- [ ] В Sequence участники = компоненты из Component Diagram
- [ ] Use Case и BPMN **не дублируют**, а дополняют друг друга

---

# Что мы получили

> Один домен × 6 диаграмм = полная документация системы.

- [ ] Use Case — **функции** для бизнеса
- [ ] BPMN — **процесс** для процесс-оунера
- [ ] Component — **архитектура** для архитектора
- [ ] Class — **код** для разработчика
- [ ] ERD — **БД** для DBA
- [ ] Sequence — **API** для интегратора

**Это и есть работа SA: переводить одну систему на 6 разных языков.**

---

# Что дальше — Capstone 2

Через несколько недель — **Capstone 2: SkillSpot** (онлайн-курсы).

Тогда добавим:
- Activity Diagram (поток обучения студента)
- State Diagram (состояния курса)
- API Spec (Swagger / OpenAPI)
- NFR (Performance, Security)

> Каждый capstone — на новый домен, чтобы навык переноса работал в любой задаче.
