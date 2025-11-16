// src/models/Comment.model.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const CommentSchema = new Schema({
  text: {
    type: String,
    required: [true, 'comment text required'],
    trim: true,
    maxlength: 1000
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recipe: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Comment', CommentSchema);
