const express= require("express")
const dbconnect = require("./db")
const User=require("./user")
const validate = require("./middleware")
const app=express()
app.use(express.json())
//API
//Get method
app.get("/",async(req,res)=>{
    const {city}=req.query
    let query={}
    if(city){
        query.city=city
    }
    let users=await User.find(query)
    res.send(users)
});
//post method
app.post("/",validate,async(req,res)=>{
    let user=await User.create(req.body)
    res.send(user)
})
//delete method
app.delete("/:id",async(req,res)=>{
    const {id}=req.params
    let user= await User.findByIdAndDelete(id)
    res.send(user)
})
//update method
app.patch("/:id",async(req,res)=>{
    const {id}=req.params 
    let user= await User.findByIdAndUpdate(id,req.body,{new:true})
    res.send(user)

})
app.listen(8090,()=>{
    console.log("Connected...")
    dbconnect();
});