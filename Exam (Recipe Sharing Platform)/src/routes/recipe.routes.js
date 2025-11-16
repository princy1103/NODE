// src/routes/recipe.routes.js
import express from "express";
import {
  getAllRecipes,
  getMyRecipes,
  getAddForm,
  createRecipe,
  getRecipeById,
  getEditForm,
  updateRecipe,
  deleteRecipe
} from "../controllers/recipe.controller.js";

import { isLoggedIn } from "../middlewares/auth.middleware.js";
import { isOwnerOrAdmin, permit } from "../middlewares/roles.middleware.js";

const router = express.Router();

// All recipes (public)
router.get("/", getAllRecipes);

// My recipes (login required)
router.get("/my-recipes", isLoggedIn, getMyRecipes);

// Add recipe (login required)
router.get("/add", isLoggedIn, getAddForm);
router.post("/add", isLoggedIn, createRecipe);

// View single recipe
router.get("/:id", getRecipeById);

// Edit recipe (owner or admin)
router.get("/edit/:id", isLoggedIn, isOwnerOrAdmin, getEditForm);
router.post("/edit/:id", isLoggedIn, isOwnerOrAdmin, updateRecipe);

// Delete recipe (owner or admin)
router.get("/delete/:id", isLoggedIn, isOwnerOrAdmin, deleteRecipe);

// ADMIN delete ANY recipe
router.get(
  "/admin/delete/:id",
  isLoggedIn,
  permit("admin"),
  deleteRecipe
);

export default router;
