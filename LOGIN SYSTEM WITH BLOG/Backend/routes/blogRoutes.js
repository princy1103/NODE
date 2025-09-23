import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

// Create (Add new Blog)
router.post("/", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all Blog
router.get("/", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

// READ by ID
router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
});

export default router