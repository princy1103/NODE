// src/controllers/comment.controller.js
import Comment from "../models/Comment.model.js";
import Recipe from "../models/Recipe.model.js";

export const addComment = async (req, res) => {
  try {
    const { text } = req.body;

    const comment = await Comment.create({
      text,
      author: req.user.id,
      recipe: req.params.recipeId
    });

    // Attach comment id to recipe
    await Recipe.findByIdAndUpdate(req.params.recipeId, {
      $push: { comments: comment._id }
    });

    res.redirect(`/recipes/${req.params.recipeId}`);
  } catch (err) {
    res.status(500).send("Comment failed");
  }
};

export const deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.commentId);

    await Recipe.findByIdAndUpdate(req.params.recipeId, {
      $pull: { comments: req.params.commentId }
    });

    res.redirect(`/recipes/${req.params.recipeId}`);
  } catch (err) {
    res.status(500).send("Delete failed");
  }
};
