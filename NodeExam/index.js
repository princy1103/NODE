const express=require("express")
const dbconnect = require("./config/db")
const router = require("./routes/customer")

require("dotenv").config()
const app=express()
app.use(express.json())

//user router
app.use("/api/customer",router)

const PORT=process.env.PORT||7090;
app.listen(PORT,()=>{
    console.log(`listening from ${PORT}`);
    dbconnect();
})