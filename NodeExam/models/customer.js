const mongoose = require("mongoose")
const Custschema = new mongoose.Schema({
    custname: { type: String, required: true },
    custId: { type: String, required: true, unique: true },
    custaddress: { type: String },
    number: { type: Number },
    serviceNumber: { type: Number },
    BillNo: { type: Number, required: true }
});
const Customer = mongoose.model("Customer", Custschema);
module.exports = Customer