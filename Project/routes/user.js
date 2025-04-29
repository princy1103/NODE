const { router, Router } = require("express")
const usercontroller = require("../controllers/user")

const demorouter = Router()
demorouter.get("/",usercontroller.get)
demorouter.post("/",usercontroller.post)
module.exports=demorouter