const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

let posts = [];

// Home
app.get("/", (req, res) => {
  res.render("index", { posts });
});

// New post form
app.get("/posts/new", (req, res) => {
  res.render("new");
});

// Create post ✅ FIX
app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  posts.unshift({
    id: Date.now(),
    title,
    content,
    createdAt: new Date()
  });

  res.redirect("/");
});

// Edit post form
app.get("/posts/:id/edit", (req, res) => {
  const postId = Number(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (!post) return res.redirect("/");

  res.render("edit", { post });
});

// Update post
app.post("/posts/:id", (req, res) => {
  const postId = Number(req.params.id);
  const { title, content } = req.body;

  const post = posts.find(p => p.id === postId);
  if (post) {
    post.title = title;
    post.content = content;
  }

  res.redirect("/");
});

// Delete post
app.post("/posts/:id/delete", (req, res) => {
  const postId = Number(req.params.id);
  posts = posts.filter(p => p.id !== postId);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
