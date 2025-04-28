const express = require("express")
const dbconnect = require("./config/db")
require("dotenv").config()
const app = express()
app.use(express.json())
// console.log(process.env.PORT)
const PORT = process.env.PORT || 8090


app.listen(PORT,()=> {
    console.log(`listening from ${PORT}`);
    dbconnect()
})