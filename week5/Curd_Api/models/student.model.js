const mongoose= require("mongoose")
const Schema= mongoose.Schema

let studentschema =new Schema({
name: {type: String, required: true, max: 100},
studentid: {type: Number, required: true}
})
module.exports=mongoose.model("Student", studentschema);
