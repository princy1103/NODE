import mongoose from "mongoose";
const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number, required: true },
    rating: { type: Number, min: 0, max: 10 }
});
export default mongoose.model("Movie", MovieSchema);
