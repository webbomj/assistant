﻿## Assistant

Цель: создать приложение с нуля, опробовать на практике различные технологии и подходы. 

Это приложение не про верстку. 

Стэк: React, TypeScript, Vite, Node.js, pnpm, Express, trpc, PostgreSQL, Prisma, Formik, Zod, Prettier, ESLint, Stylelint, SCSS, Husky, Passport, React Router, Jest, Docker.

Что практиковалось:
* Создание приложения с нуля используя Fullstack 
* Работа с Vite
* Установка, работа с линтерами кода и стилей.
* Создание бэкенда на Express с последующим внедрением trpc
* Написание различных скриптов в package.json (линтеры, типы)
* Настройка прекоммит хуков
* Знакомство с библиотекой lodash (для генерации контента, и для выборки свойств объектов)
* Создание различных оберток для повторящегося кода
* Практика работы с formik вместе с валидацией Zod (на бекенде тоже его использовал)
* Работа с index generator для автоматической генерации index файлов
* Ограничение передачи кода с бекенда на фронт (только файлы с валидацией и утилиты)
* Поднятие PostgreSQL
* Подключение ORM Prisma
* Создание связанных сущностей в БД
* Решения различных кейсов (например добавление необходимых полей в бд, когда уже есть данные)
* Создание авторизации и регистрации с помощью Passport по JWT
* Создание env файлов с последующей валидацией их через Zod
* Написание Title для всех страниц с возможностью генерации по шаблону
* Добавление различных favicon
* Добавление картинкок, иконок, svg изображений
* Создание страниц и переиспользуемых компонентов
* Фича создания подгрузки при скроле
* Фича поиска по всей бд
* Фича CRUD идей
* Фича блокировки идей
* Фича лайк идеи
* Фича авторизация

Идеи добавленные в будущем:
* Доска задач
* Помидоро
* Журнал тренировок

Идеи по отработки технологий:
* Добавить интеграционных тестов и E2E
* Добавить логгер
* Обернуть в Docker
* Опробовать CRON задачи (эмуляция рассылки)
* Максимально оптимизировать (опробовать стандартные методы)
* Добавить Анимаций
* Локализировать (интернализировать)
* Смену темы
* PWA
* Service worker
* Попробовать nanostore

### Как запустить
Для запуска нужна установленная nodejs v 21.6.1 или выше и pnpm
* Скачиваете репозиторий
* Устанавливаете зависимости
```bash
pnpm b i
pnpm w i
```
* Добавляете файлы .env в webapp и backend папку (примеры того что нужно добавить есть в файле .env.example)
* Запускаете командой
```
pnpm dev
```
