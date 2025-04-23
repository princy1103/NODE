const mongoose = require("mongoose")

const Userschema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    password:String,
});
const User = mongoose.model("user",Userschema)
module.exports=User