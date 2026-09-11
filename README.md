# Scribo

### A clean, minimal space to write, publish, and manage your thoughts.

[![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?style=for-the-badge\&logo=node.js\&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge\&logo=express\&logoColor=white)](https://expressjs.com/)
[![EJS](https://img.shields.io/badge/EJS-Templates-A91E50?style=for-the-badge\&logo=ejs\&logoColor=white)](https://ejs.co/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

---

## About

**Scribo** is a lightweight full-stack blogging application built with **Node.js, Express.js, and EJS**.

It focuses on keeping the blogging experience simple: create posts, edit them, delete them, and browse everything through a clean responsive interface.

Scribo also includes a persistent **dark mode preference** and thoughtful empty-state handling for a better user experience.

> **Write freely. Keep it simple. Let your ideas speak.**

---

## Features

| Feature               | Description                                  |
| --------------------- | -------------------------------------------- |
| Create Posts          | Write and publish new blog posts             |
| Edit Posts            | Update existing content whenever needed      |
| Delete Posts          | Remove unwanted blog posts                   |
| Responsive UI         | Works across desktop and smaller screens     |
| Dark Mode             | Switch between light and dark themes         |
| Persistent Theme      | Remembers the selected theme                 |
| Server-Side Rendering | Pages rendered efficiently using EJS         |
| REST-Style Routing    | Clean Express-based application routes       |
| Empty States          | Helpful UI when no posts are available       |
| Lightweight           | No database required for the current version |

---

## Tech Stack

### Backend

* **Node.js**
* **Express.js**

### Frontend

* **EJS**
* **HTML5**
* **CSS3**
* **JavaScript ES6+**

### Data

* In-memory storage

---

## Project Structure

```text
Scribo/
│
├── public/
│   ├── css/
│   └── js/
│
├── views/
│   ├── partials/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

Check your installations:

```bash
node --version
npm --version
```


## How It Works

Scribo follows a simple request-based architecture:

```text
        ┌───────────────┐
        │     User      │
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │ Express.js    │
        │    Routes     │
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │ Application   │
        │    Logic      │
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │ In-Memory Data│
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │     EJS       │
        │   Templates   │
        └───────────────┘
```

---

## CRUD Operations

Scribo supports the core blogging operations:

```text
CREATE  →  Write a new post
READ    →  View published posts
UPDATE  →  Edit an existing post
DELETE  →  Remove a post
```

This makes the project a simple example of building a full-stack CRUD application with Express.

---

## Dark Mode

Scribo includes a theme switcher that allows users to move between light and dark interfaces.

The selected preference is persisted on the client side, so the interface can remember the user's choice.

---



## Current Storage

The current version uses **in-memory data storage**.

That keeps the application simple and removes the need to configure a database during development.

However, data stored in memory is not permanent and can be lost when the server restarts.

### Future database options

Scribo can be extended with:

* MongoDB
* PostgreSQL
* MySQL
* SQLite

This would allow blog posts to persist between deployments and server restarts.

---

## Why Scribo?

**Scribo** comes from the Latin word associated with **writing**.

The idea behind the name is simple:

> **A small digital desk for turning thoughts into words.**

Scribo is intentionally minimal so the focus stays on the content rather than unnecessary complexity.

---

## License

This project is available under the **MIT License**.

See the `LICENSE` file for more information.

---

## Project

**Scribo — Write. Refine. Share.**

Built with Node.js, Express.js, EJS, HTML, CSS, and JavaScript.

---

<p align="center">
  Made with Node.js and a lot of words.
</p>
