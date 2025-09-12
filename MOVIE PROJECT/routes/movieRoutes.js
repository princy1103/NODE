import express from 'express';
import Movie from '../models/Movie.js'

const router = express.Router();

// Create (Add new movie)
router.post("/", async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all movies
router.get("/", async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// READ by ID
router.get("/:id", async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: "Movie deleted" });
});

export default router