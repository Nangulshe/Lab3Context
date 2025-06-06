# Лабораторная работа №3 — Работа с контекстом в React

## 📌 Цель работы

Научиться использовать React Context для управления состоянием в приложении и передавать данные между компонентами без "props".

---

## 🔧 Реализовано

- Создано React-приложение.
- Реализован глобальный контекст (`UserContext`) для хранения информации о пользователе.
- Контекст был обёрнут вокруг компонентов в `App.jsx` с помощью `UserContext.Provider`.
- Из разных вложенных компонентов осуществляется доступ к контексту с помощью хука `useContext`.
- Добавлен функционал обновления данных контекста.
- Все компоненты корректно реагируют на изменение состояния в контексте.
