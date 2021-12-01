const mongoose = require("mongoose") 
const nespressoSchema = mongoose.Schema({ 
 nespresso_type:{
    type: String,
    minlength:5
 },
 id:String,
 country: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("nespresso", nespressoSchema)