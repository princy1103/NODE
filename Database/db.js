const mongoose=require("mongoose")
 
const dbconnect=async()=>{
    try{
        await mongoose.connect("mongodb+srv://princyjoshi5670:DBNode@cluster0.w5i5l3n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("connected to the Mongodb.....")
    }catch(error){
        console.log("error",error);
    }
};
module.exports=dbconnect;