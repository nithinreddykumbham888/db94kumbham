const mongoose = require("mongoose") 
const nespressoSchema = mongoose.Schema({ 
 nespresso_type: String, 
 country: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("nespresso", nespressoSchema)