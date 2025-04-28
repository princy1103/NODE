const mongoose = require("mongoose")

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("connected...");
    } catch (error) {
        console.log(error);
    }
}
module.exports=dbconnect