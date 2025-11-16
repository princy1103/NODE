// src/routes/comment.routes.js
import express from "express";
import {
  addComment,
  deleteComment
} from "../controllers/comment.controller.js";

import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Add comment
router.post("/:recipeId/add", isLoggedIn, addComment);

// Delete comment
router.get("/:recipeId/delete/:commentId", isLoggedIn, deleteComment);

export default router;
