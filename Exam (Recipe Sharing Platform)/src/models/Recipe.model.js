// src/models/Recipe.model.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const RecipeSchema = new Schema({
  title: {
    type: String,
    required: [true, 'title required'],
    trim: true
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  ingredients: [{
    type: String,
    trim: true
  }],
  steps: [{
    type: String,
    trim: true
  }],
  images: [{
    type: String, // store image URLs or file paths from public/images or uploads
    trim: true
  }],
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  // optional tags or cuisine type for culinary theme
  tags: [{
    type: String,
    trim: true
  }],
  cuisine: {
    type: String,
    trim: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, { timestamps: true });

// Add a text index for search (title + description + ingredients)
RecipeSchema.index({ title: 'text', description: 'text', ingredients: 'text' });

export default mongoose.model('Recipe', RecipeSchema);
