const mongoose = require("mongoose")
const Userschema = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    number:{type:Number},
    role:{type:String,enum:["USER","ADMIN"],defaultValue:"USER"},
});
const User=mongoose.model("User",Userschema)
module.exports=User