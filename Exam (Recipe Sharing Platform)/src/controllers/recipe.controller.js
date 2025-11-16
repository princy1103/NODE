// src/controllers/recipe.controller.js
import Recipe from "../models/Recipe.model.js";
import User from "../models/User.model.js";
import Comment from "../models/Comment.model.js";

// -------------------------------
// GET ALL RECIPES
// -------------------------------
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
      .populate("author", "username")
      .sort({ createdAt: -1 });

    res.render("recipeList", { recipes });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// -------------------------------
// GET MY RECIPES
// -------------------------------
export const getMyRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ author: req.user.id })
      .populate("author", "username");

    res.render("myRecipes", { recipes });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// -------------------------------
// RENDER ADD FORM
// -------------------------------
export const getAddForm = (req, res) => {
  res.render("recipeForm");
};

// -------------------------------
// CREATE RECIPE
// -------------------------------
export const createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, steps, tags, cuisine } = req.body;

    const recipe = await Recipe.create({
      title,
      description,
      ingredients: ingredients ? ingredients.split(",").map(i => i.trim()).filter(i => i) : [],
      steps: steps ? steps.split(".").map(s => s.trim()).filter(s => s) : [],
      tags: tags ? tags.split(",").map(t => t.trim()).filter(t => t) : [],
      cuisine,
      author: req.user.id
    });

    // Add recipe reference inside user
    await User.findByIdAndUpdate(req.user.id, {
      $push: { recipes: recipe._id }
    });

    res.redirect("/recipes");
  } catch (err) {
    res.status(500).send("Create recipe failed");
  }
};

// -------------------------------
// VIEW SINGLE RECIPE
// -------------------------------
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id)
      .populate("author", "username")
      .populate({
        path: "comments",
        populate: { path: "author", select: "username" },
        options: { sort: { createdAt: -1 } }
      });

    if (!recipe) return res.status(404).send("Recipe not found");

    res.render("recipeItem", { recipe });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// -------------------------------
// EDIT RECIPE (RENDER FORM)
// -------------------------------
export const getEditForm = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  res.render("editRecipe", { recipe });
};

// -------------------------------
// UPDATE RECIPE
// -------------------------------
export const updateRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, steps, tags, cuisine } = req.body;

    const updateData = {
      title,
      description,
      cuisine,
      ingredients: ingredients ? ingredients.split(",").map(i => i.trim()).filter(i => i) : [],
      steps: steps ? steps.split(".").map(s => s.trim()).filter(s => s) : [],
      tags: tags ? tags.split(",").map(t => t.trim()).filter(t => t) : []
    };

    await Recipe.findByIdAndUpdate(req.params.id, updateData);
    res.redirect(`/recipes/${req.params.id}`);
  } catch (err) {
    res.status(500).send("Update failed");
  }
};

// -------------------------------
// DELETE RECIPE
// -------------------------------
export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).send("Recipe not found");

    // Delete associated comments
    await Comment.deleteMany({ recipe: req.params.id });

    // Delete recipe
    await Recipe.findByIdAndDelete(req.params.id);

    // Remove from user array
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { recipes: req.params.id }
    });

    res.redirect("/recipes");
  } catch (err) {
    res.status(500).send("Delete failed");
  }
};
