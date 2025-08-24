# Timequity Landing — Задачи (MVP + улучшения)

## LND-001 — Init: репозиторий и проект

**Цель:** Создать репозиторий `timequity-landing` и базовую политику веток.

**Описание:**
- Создать репозиторий и включить branch protection для `main` (review + checks).
- Добавить `LICENSE` (MIT), `README` (скелет), `.gitignore` (Node/Vite).
- В README указать стек, команды, требования к Node.

**Критерии приёмки:**
- Репозиторий создан, `main` защищён, README с разделами присутствует.

**Зависимости:** нет.

**Метки:** area:brand, area:infra, type:task, priority:P0

## LND-002 — Scaffold: Vite + React + TypeScript + Tailwind

**Цель:** Инициализировать каркас проекта.

**Описание:**
- Создать Vite React TS проект.
- Подключить Tailwind (`tailwindcss`, `postcss`, `autoprefixer`).
- Создать `src/index.css` и проверить, что утилиты Tailwind работают.

**Критерии приёмки:**
- `npm run dev` поднимает страницу.
- Tailwind-классы применяются (проверочный блок отображается).

**Зависимости:** LND-001.

**Метки:** area:infra, area:dapp, type:task, priority:P0

## LND-003 — Design tokens (dark) + fonts

**Цель:** Настроить тёмную палитру и шрифты.

**Описание:**
- В `tailwind.config.js` определить цвета: `background`, `surface`, `primary`, `foreground`, `secondary`.
- Подключить шрифты **Inter** и **Space Grotesk** через `<link>`.
- Проверить контраст и базовые токены (радиусы, тени).

**Критерии приёмки:**
- Демоблок рендерится на тёмной теме, контраст соответствует WCAG AA.

**Зависимости:** LND-002.

**Метки:** area:brand, area:dapp, type:feature, priority:P0

## LND-004 — Структура секций (Hero→Footer)

**Цель:** Сверстать каркас секций одной страницы.

**Описание:**
- Компоненты секций: Hero, HowItWorks, WhyTime, Roles, DailyNFT, Roadmap, FAQ, Waitlist, Footer.
- Собрать в `App.tsx`; добавить якоря `#how #why #nft #roadmap #faq #waitlist`.
- Контент — англ. копирайт из согласованного текста.

**Критерии приёмки:**
- Адаптивность без горизонтального скролла; семантическая разметка (`section`, `h1–h3`, `footer`).

**Зависимости:** LND-003.

**Метки:** area:dapp, type:feature, priority:P0

## LND-005 — UI (Button/Input/Label/Textarea) в стиле shadcn/ui

**Цель:** Базовые UI-компоненты для переиспользования.

**Описание:**
- Реализовать Button, Input, Label, Textarea (функциональные компоненты).
- Состояния hover/focus/disabled; корректные `aria-*`.

**Критерии приёмки:**
- Компоненты переиспользуются в секциях и форме, проходят keyboard-навигацию.

**Зависимости:** LND-003.

**Метки:** area:dapp, type:feature, priority:P0

## LND-006 — Waitlist: POST → Apps Script

**Цель:** Подключить форму ожидания к Google Apps Script endpoint.

**Описание:**
- Поля: Name, Email, Role (select), Message (optional).
- `POST` JSON на `VITE_WAITLIST_ENDPOINT`, состояния: loading/success/error, валидация email.
- Под формой — короткая политика приватности.

**Критерии приёмки:**
- 3 тестовые отправки → видны в Google Sheet.
- Ошибки сети/валидации обрабатываются (сообщения пользователю).

**Зависимости:** LND-005.

**Метки:** area:dapp, type:feature, priority:P0

## LND-007 — SEO/OG/Twitter + favicon + webmanifest

**Цель:** Базовая SEO-настройка и предпросмотры ссылок.

**Описание:**
- Добавить title/description, OG/Twitter (summary_large_image).
- Подключить favicon.svg, `site.webmanifest`.
- Создать `robots.txt`, `sitemap.xml`.
- OG-картинка 1200×630 (логотип + слоган, тёмный фон).

**Критерии приёмки:**
- Превью корректно отображается в X/Twitter и Slack/Discord.

**Зависимости:** LND-004.

**Метки:** area:brand, area:docs, type:feature, priority:P0

## LND-008 — Accessibility pass (WCAG AA)

**Цель:** Повысить доступность интерфейса.

**Описание:**
- Проверка контраста, alt, ролей, заголовков, landmarks.
- Навигация клавиатурой, видимые focus-states, `aria-label` у иконок.

**Критерии приёмки:**
- Lighthouse A11y ≥ 90; доступность подтверждена ручной проверкой.

**Зависимости:** LND-004.

**Метки:** area:dapp, type:task, priority:P0

## LND-009 — Performance & Lighthouse

**Цель:** Достичь целевых метрик производительности.

**Описание:**
- Предзагрузки/предсоединения шрифтов, оптимизация ассетов.
- Lighthouse mobile/desktop; устранение предупреждений.

**Критерии приёмки:**
- Lighthouse: ≥90 desktop, ≥85 mobile; LCP ≤ 2.5s (Slow 4G).

**Зависимости:** LND-004, LND-007.

**Метки:** area:infra, area:dapp, type:task, priority:P0

## LND-010 — Деплой: staging + production + ENV

**Цель:** Настроить окружения и публикацию.

**Описание:**
- Хостинг: Vercel/Cloudflare; preview для PR.
- ENV переменные для staging/prod (`VITE_WAITLIST_ENDPOINT`).
- Подключить домен и HTTPS.

**Критерии приёмки:**
- Доступны staging и production URL; preview создаётся для PR.

**Зависимости:** LND-006, LND-007.

**Метки:** area:infra, type:task, priority:P0

## LND-011 — QA кроссбраузер/мобайл + фиксы

**Цель:** Завершить тестирование и устранить баги P0/P1.

**Описание:**
- Chrome/Firefox/Safari; iOS Safari/Android Chrome.
- Проверить OG/Twitter Card Validator, негативные кейсы формы.

**Критерии приёмки:**
- Баги P0/P1 исправлены; чек-лист QA приложен в комментарии.

**Зависимости:** LND-010.

**Метки:** area:dapp, type:task, priority:P0

## LND-012 — Документация (README) для мейнтейнеров

**Цель:** Обновить документацию для разработчиков.

**Описание:**
- Обновить README: запуск локально, точки изменения контента/палитры, деплой.
- Стандарты: TS strict, функциональные компоненты, Conventional Commits, clarity-over-cleverness.

**Критерии приёмки:**
- Разработчик без контекста запускает проект за ≤ 5 минут по README.

**Зависимости:** LND-001…LND-011.

**Метки:** area:docs, type:task, priority:P0

## LND-101 — Toaster/notifications для формы

**Цель:** Улучшить UX уведомлений отправки формы.

**Описание:**
- Добавить тосты успеха/ошибки с доступностью (`role="status"`).

**Критерии приёмки:**
- Уведомления ненавязчивы, не ломают фокус, автозакрытие регулируемо.

**Зависимости:** LND-006.

**Метки:** area:dapp, type:enhancement, priority:P1

## LND-102 — Микро-анимации и hover-эффекты

**Цель:** Добавить нюансные интеракции без перегруза.

**Описание:**
- Анимации появления секций при скролле; hover-свечения для CTA.
- Учитывать `prefers-reduced-motion`.

**Критерии приёмки:**
- Нет дергания layout (CLS≈0), анимации корректно отключаются.

**Зависимости:** LND-004.

**Метки:** area:brand, type:enhancement, priority:P1

## LND-103 — Страница /manifesto

**Цель:** Добавить SEO-дружелюбную страницу манифеста.

**Описание:**
- Статичная страница /manifesto; оглавление и якоря.
- Мета-теги, внутренняя навигация из футера.

**Критерии приёмки:**
- Страница доступна и валидна семантически.

**Зависимости:** LND-004.

**Метки:** area:docs, type:feature, priority:P1

## LND-104 — Аналитика Plausible/Umami + события

**Цель:** Подключить лёгкую аналитику без cookies.

**Описание:**
- Вставить скрипт Plausible/Umami; события на CTA.

**Критерии приёмки:**
- Видны события `cta_join_waitlist`, `cta_read_manifesto` в дашборде.

**Зависимости:** LND-004, LND-006.

**Метки:** area:infra, type:feature, priority:P1

## LND-105 — Legal: Privacy & Terms (draft)

**Цель:** Добавить базовые правовые страницы (черновики).

**Описание:**
- Страницы Privacy/Terms; пометка «draft / not legal advice»; ссылки в футере.

**Критерии приёмки:**
- Страницы доступны и связаны с лендингом.

**Зависимости:** LND-004.

**Метки:** area:docs, type:task, priority:P1