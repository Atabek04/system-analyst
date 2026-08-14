# ✅ Решение — Практика 3 (Stayly, бронирование жилья)

> Файл для преподавателя. Один из корректных вариантов. Главное здесь — **пагинация** (объект-обёртка), **массивы строк** (фото, удобства) и **вложенный объект** хозяина.

---

## Сущности БД

```
User
- id: integer (PK)
- name: string
- email: string

Host
- id: integer (PK)
- name: string
- isSuperhost: boolean
- since: integer               # год
- responseTime: string         # «отвечает за час»

Listing
- id: integer (PK)
- hostId: integer (FK → Host)
- title: string
- city: string
- type: enum(apartment, house, loft, chalet)
- guests: integer
- bedrooms: integer
- pricePerNight: integer
- rating: decimal
- reviewsCount: integer
- isSuperhost: boolean
- instantBook: boolean
- description: string
- photos: string[]             # массив URL
- cleaningFee: integer
- serviceFee: integer

Amenity
- id: integer (PK)
- name: string                 # «Wi-Fi», «Кухня», «Парковка»
- icon: string

ListingAmenity                 # связь many-to-many
- listingId: integer (FK → Listing)
- amenityId: integer (FK → Amenity)

Review
- id: integer (PK)
- listingId: integer (FK → Listing)
- authorId: integer (FK → User)
- rating: integer
- text: string
- createdAt: date

Booking
- id: integer (PK)
- listingId: integer (FK → Listing)
- userId: integer (FK → User)
- checkIn: date
- checkOut: date
- guests: integer
- status: enum(confirmed, pending, cancelled)
- total: integer
- createdAt: datetime
```

Ключевые моменты:
- `photos` можно хранить как массив строк (URL) или отдельной таблицей — на уровне API это **массив строк**.
- Удобства через **many-to-many** (`ListingAmenity`).
- `isSuperhost`, `instantBook` — **boolean**.
- `Host` это отдельная сущность, во вложенном объекте объявления.

---

## Endpoints

### Экран 1 — поиск → **query-параметры** + **объект-обёртка с пагинацией**

```http
GET /listings?city=almaty&checkIn=2026-09-12&checkOut=2026-09-15&guests=2&page=1
```
```json
{
  "page": 1,
  "totalPages": 9,
  "total": 128,
  "items": [
    {
      "id": 1,
      "title": "Студия у Медеу",
      "city": "Алматы",
      "guests": 2,
      "bedrooms": 1,
      "pricePerNight": 18000,
      "rating": 4.92,
      "isSuperhost": true
    },
    {
      "id": 2,
      "title": "Дом с видом на горы",
      "city": "Каскелен",
      "guests": 6,
      "bedrooms": 3,
      "pricePerNight": 42000,
      "rating": 4.87,
      "isSuperhost": false
    }
  ]
}
```

Обрати внимание: ответ это **объект** `{ }`, а массив `items` лежит внутри. Так сервер умещает и список, и мета-данные о страницах в один ответ. Голый массив `[ ]` этого бы не позволил.

### Экран 2 — страница объявления → **объект** с массивами строк, массивом объектов и вложенным объектом

```http
GET /listings/1
```
```json
{
  "id": 1,
  "title": "Студия у Медеу",
  "city": "Алматы",
  "rating": 4.92,
  "reviewsCount": 214,
  "pricePerNight": 18000,
  "cleaningFee": 4000,
  "serviceFee": 5400,
  "isSuperhost": true,
  "instantBook": true,
  "description": "Светлая студия с панорамным видом на горы Медеу...",
  "photos": [
    "https://.../photo-1.jpg",
    "https://.../photo-2.jpg",
    "https://.../photo-3.jpg"
  ],
  "amenities": ["Wi-Fi", "Кухня", "Парковка", "Кондиционер", "Smart TV"],
  "host": {
    "name": "Айгерим Т.",
    "isSuperhost": true,
    "since": 2021,
    "responseTime": "отвечает за час"
  },
  "reviews": [
    {
      "author": "Дмитрий",
      "rating": 5,
      "text": "Прекрасная студия, всё как на фото...",
      "createdAt": "2026-09-01"
    },
    {
      "author": "Сауле",
      "rating": 5,
      "text": "Чисто, уютно, удобное расположение.",
      "createdAt": "2026-08-20"
    }
  ]
}
```

Три разных типа коллекций в одном ответе:
- `photos`, `amenities` → **массив строк** (простые значения);
- `reviews` → **массив объектов**;
- `host` → **вложенный объект** (один, не массив).

### Экран 3 — бронирование → **POST**, ответ **201 Created**

```http
POST /bookings
Content-Type: application/json

{
  "listingId": 1,
  "checkIn": "2026-09-12",
  "checkOut": "2026-09-15",
  "guests": 2
}
```
```http
201 Created
```
```json
{
  "id": "BK-7781",
  "status": "confirmed",
  "listing": "Студия у Медеу",
  "checkIn": "2026-09-12",
  "checkOut": "2026-09-15",
  "nights": 3,
  "guests": 2,
  "host": "Айгерим Т.",
  "priceBreakdown": {
    "nightly": 54000,
    "serviceFee": 5400,
    "cleaningFee": 4000
  },
  "total": 63400,
  "createdAt": "2026-08-14T18:40:00Z"
}
```

---

## Что проверяем при разборе

| Навык | Где проявляется |
|---|---|
| Фильтры → query-параметры | Экран 1 |
| Пагинация → объект-обёртка (`items`/`total`/`page`) | Экран 1 |
| Массив строк | `photos`, `amenities` |
| Массив объектов | `reviews` |
| Вложенный объект | `host` |
| boolean-поля | `isSuperhost`, `instantBook` |
| POST + 201 при бронировании | Экран 3 |
| many-to-many через `ListingAmenity` | Модель данных |
