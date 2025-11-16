// src/routes/index.js
import express from "express";
import authRoutes from "./auth.routes.js";
import recipeRoutes from "./recipe.routes.js";
import commentRoutes from "./comment.routes.js";

import { attachUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Attach user globally (navbar user data)
router.use(attachUser);

// Redirect root to recipes
router.get("/", (req, res) => {
  res.redirect("/recipes");
});

// Route groups
router.use("/auth", authRoutes);
router.use("/recipes", recipeRoutes);
router.use("/comments", commentRoutes);

export default router;
