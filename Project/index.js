const express = require("express")
const dbconnect = require("./config/db")
const demorouter = require("./routes/user")
require("dotenv").config()
const app = express()
app.use(express.json())
// console.log(process.env.PORT)
//user router 
app.use("/api/user", demorouter)

const PORT = process.env.PORT || 8090
app.listen(PORT, () => {
    console.log(`listening from ${PORT}`);
    dbconnect()
})