import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, default: "General", },
    image: { type: String, required: true },
}, { timestamps: true });
export default mongoose.model("Blog", BlogSchema);
