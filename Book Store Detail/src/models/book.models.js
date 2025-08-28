import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true
        },
        publisher: {
            type: String
        },
        publishedDate: {
            type: Date
        }, language: {
            type: String,
            default: "English"
        },
        pageCount: {
            type: Number
        },
        price: {
            type: Number,
            required: true
        },
        stockQuantity: {
            type: Number,
            default: 0,
            required: true
        },
        edition:{
            type:Number,
        },
        category:{
            type:String,
            required:true
        }
    }
)

export default Book = mongoose.model("Books" , bookSchema)