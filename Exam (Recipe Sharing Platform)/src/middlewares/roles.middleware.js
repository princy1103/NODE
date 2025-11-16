// src/middlewares/roles.middleware.js

// Only allow specific roles
export const permit = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) return res.redirect("/auth/login");

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).send("Access Denied: Insufficient Permissions");
    }
    next();
  };
};

// For recipe ownership (user must own recipe or be admin)
import Recipe from "../models/Recipe.model.js";

export const isOwnerOrAdmin = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) return res.status(404).send("Recipe Not Found");

    // Allow admin OR recipe owner
    if (req.user.role === "admin" || recipe.author.toString() === req.user.id) {
      return next();
    }

    return res.status(403).send("Unauthorized");
  } catch (err) {
    return res.status(500).send("Server Error");
  }
};
