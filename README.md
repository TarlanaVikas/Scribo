# MinimalBlog

A clean, minimal full-stack blog application built with Node.js, Express, and EJS.  
Designed with a focus on simplicity, usability, and professional UI/UX.

## Live Demo
https://minimalblog.onrender.com

## Features
- Create, edit, and delete blog posts
- Server-side rendering using EJS
- Clean, responsive UI with modern CSS
- Dark mode toggle with persistent preference
- Empty-state UX for first-time users
- REST-style routing with Express
- In-memory data handling (no database)

## Tech Stack
- Node.js
- Express.js
- EJS
- HTML5, CSS3
- JavaScript (ES6)

## Project Structure
minimal-blog/
├── public/
│ ├── css/
│ └── js/
├── views/
│ ├── partials/
│ ├── index.ejs
│ ├── new.ejs
│ └── edit.ejs
├── app.js
├── package.json
└── README.md


## Getting Started (Local Setup)
```bash
npm install
npm run dev
```

Open:
http://localhost:3000

Deployment
This application is deployed on Render using a Node web service.

Start command:
```npm start```

Notes
This version stores data in memory.
Persistence can be added easily using MongoDB or PostgreSQL in future iterations.

Author
Shreya Ranjan
