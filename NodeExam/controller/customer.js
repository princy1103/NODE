const Customer = require("../models/customer");
const custController = {
    get:async (req,res)=>{
            let user = await Customer.find();
            res.send(user);
    },
    post: async (req, res) => {
            let user = await Customer.create(req.body);
            res.send(user);
    },
    patch:async(req,res)=>{
            const {id}=req.params
            let user=await Customer.findByIdAndUpdate(id,req.body,{new:true})
            res.send(user)
    },
    delete:async(req,res)=>{
        const {id}=req.params
        let user= await Customer.findByIdAndDelete(id)
        res.send(user)
    }
}
module.exports=custController