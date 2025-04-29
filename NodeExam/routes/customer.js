const {Router}=require("express")
const custController = require("../controller/customer")

const router=Router()
router.get("/",custController.get)
router.post("/",custController.post)
router.patch("/:id",custController.patch)
router.delete("/:id",custController.delete)

module.exports=router
