TARGET DECK: System Analyst::Requirements::Types (BR, UR, FR, NFR)
Tags: requirements types
**Related:** [[7-slides/requirements-engineering-a/requirements-engineering-a]]

---

START
Coding Questions
Что такое Business Requirements и кто их определяет?
Back: **Business Requirements (BR)** описывают высокоуровневые бизнес-цели — ЗАЧЕМ нужен проект. Определяют бизнес-стейкхолдеры (CEO, спонсор, Product Owner). Примеры: "Увеличить онлайн-продажи на 25% в Q3" или "Сократить обращения в поддержку на 40%."
Tags: requirements types br
END

START
Coding Questions
Что такое User Requirements и как они связаны с Business Requirements?
Back: **User Requirements (UR)** описывают, что нужно пользователям для достижения своих целей — ЧТО с точки зрения пользователя. Связывают бизнес-цели и системные функции. Пример: BR "увеличить продажи" → UR "пользователи должны быстро находить товары и сравнивать цены." Записываются как User Story или Use Cases.
Tags: requirements types ur
END

START
Coding Questions
Что такое Functional Requirements (FR)?
Back: **FR** описывают конкретное поведение системы — ЧТО система делает в ответ на входные данные. Пишутся конкретно и тестируемо. Пример: "Система должна отправлять email подтверждения заказа в течение 1 минуты после оформления."
Tags: requirements types fr
END

START
Coding Questions
Что такое Non-Functional Requirements (NFR)?
Back: **NFR** описывают, НАСКОЛЬКО ХОРОШО система работает — атрибуты качества, а не функции. Пример: "Система должна обрабатывать 1000 запросов/сек с временем отклика < 500мс." NFR не описывают ЧТО делает система, а КАК ХОРОШО она это делает.
Tags: requirements types nfr
END

START
Coding Questions
Сколько основных категорий NFR существует?
Back: 5 категорий: Performance, Security, Availability, Scalability, Usability
Tags: requirements types nfr
END

START
Coding Questions
Что такое Performance как категория NFR?
Back: **Performance (Производительность)** — требования к скорости и пропускной способности системы. Пример: "Страница поиска загружается за 2 сек для 95% запросов при нагрузке 500 пользователей."
Tags: requirements types nfr
END

START
Coding Questions
Что такое Security как категория NFR?
Back: **Security (Безопасность)** — требования к защите данных и доступа. Пример: "Все пользовательские пароли хранятся в виде bcrypt-хеша; соединение только через HTTPS."
Tags: requirements types nfr
END

START
Coding Questions
Что такое Availability как категория NFR?
Back: **Availability (Доступность)** — требования к аптайму системы. Пример: "Система должна быть доступна 99.9% времени (≈ 8.7 часов простоя в год)."
Tags: requirements types nfr
END

START
Coding Questions
Что такое Scalability как категория NFR?
Back: **Scalability (Масштабируемость)** — способность системы выдерживать рост нагрузки. Пример: "Система должна поддерживать 10 000 одновременных пользователей без деградации производительности."
Tags: requirements types nfr
END

START
Coding Questions
Что такое Usability как категория NFR?
Back: **Usability (Удобство использования)** — требования к интуитивности и доступности интерфейса. Пример: "Новый пользователь должен оформить первый заказ без инструкции за ≤ 5 минут."
Tags: requirements types nfr
END

START
Coding Questions
Как отличить хорошее требование от плохого?
Back:
**Плохое**: "Система должна быть быстрой" (размытое, неизмеримое, нетестируемое)
**Хорошее**: "Страница каталога загружается за 2 секунды для 95% запросов при нагрузке до 500 пользователей"
Хорошее требование — **конкретное**, **измеримое**, **тестируемое** и **однозначное**.
Tags: requirements types quality
END
