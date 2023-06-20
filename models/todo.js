const mongoose = require("mongoose");



const toDoSchema = new mongoose.Schema({
    userName: String,
    description: String,
},{
    timestamps:true
})

const Todo = mongoose.model("Todo",toDoSchema)

module.exports = Todo;