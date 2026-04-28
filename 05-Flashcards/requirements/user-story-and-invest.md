TARGET DECK: System Analyst::Requirements::User Story & INVEST
Tags: requirements user-story invest
**Related:** [[7-slides/requirements-engineering-b/requirements-engineering-b]]

---

START
Coding Questions
Что такое User Story и каков её формат?
Back: **User Story** — описание фичи с точки зрения пользователя: **"As a [роль], I want [действие], so that [ценность]"**. Пример: "As a покупатель, I want добавлять товары в избранное, so that быстро найти их позже."
Tags: requirements user-story
END

START
Coding Questions
Почему часть "so that" — самая важная в User Story?
Back: Без ценности команда не понимает мотивацию → строит неправильное решение. Пример: "I want сбросить пароль" → решение неясно. "...so that восстановить доступ, если забыл" → сброс через email. "...so that сменить на безопасный" → сначала проверить старый. Одно действие — разные решения.
Tags: requirements user-story
END

START
Coding Questions
Сколько критериев в аббревиатуре INVEST?
Back: 6 критериев: Independent, Negotiable, Valuable, Estimable, Small, Testable
Tags: requirements user-story invest
END

START
Coding Questions
Что означает I в INVEST?
Back: **I — Independent**: User Story можно разрабатывать в любом порядке, нет жёстких зависимостей от других Stories.
Tags: requirements user-story invest
END

START
Coding Questions
Что означает N в INVEST?
Back: **N — Negotiable**: детали реализации обсуждаются командой, это не жёсткий контракт. Story описывает потребность, а не конкретное решение.
Tags: requirements user-story invest
END

START
Coding Questions
Что означает V в INVEST?
Back: **V — Valuable**: Story должна приносить ценность пользователю или бизнесу. Если ценность не очевидна — Story не нужна.
Tags: requirements user-story invest
END

START
Coding Questions
Что означает E в INVEST?
Back: **E — Estimable**: команда может оценить трудозатраты на реализацию. Если Story слишком размытая — её нельзя оценить.
Tags: requirements user-story invest
END

START
Coding Questions
Что означает S в INVEST?
Back: **S — Small**: Story должна помещаться в один Sprint. Слишком большая Story (Epic) → разбить на несколько меньших.
Tags: requirements user-story invest
END

START
Coding Questions
Что означает T в INVEST?
Back: **T — Testable**: у Story есть чёткие критерии для проверки (Acceptance Criteria). Если нельзя написать тест — требование размыто.
Tags: requirements user-story invest
END

START
Coding Questions
Как исправить User Story, которая нарушает критерий Small в INVEST?
Back: Разбить на атомарные Stories. Пример: "управлять всеми пользователями" → "блокировать пользователя", "создавать пользователя", "назначать роль пользователю".
Tags: requirements user-story invest
END

START
Coding Questions
Что такое Job Story и когда она лучше, чем User Story?
Back: **Job Story**: **"When [ситуация], I want [действие], so that [результат]"**. Лучше User Story когда контекст важнее роли или один пользователь ведёт себя по-разному в разных ситуациях. Пример: "When я в метро с плохим интернетом, I want упрощённую версию, so that найти товар."
Tags: requirements user-story job-story
END
