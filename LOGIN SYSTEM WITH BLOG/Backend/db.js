import mongoose from "mongoose"; 
const dbconnect=async()=>{
    try{
        await mongoose.connect("mongodb+srv://BlogDB:blog1103@cluster0.w5i5l3n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("connected to the Mongodb.....")
    }catch(error){
        console.log("error",error);
    }
};
export default dbconnect;
