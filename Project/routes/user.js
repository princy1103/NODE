const { Router } = require("express")
const usercontroller = require("../controllers/user")

const router = Router()
router.get("/",usercontroller.get)
router.post("/",usercontroller.post)
module.exports=router