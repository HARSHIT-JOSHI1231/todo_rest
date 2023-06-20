const Todo = require("../models/todo")

const createTodo = async (req, res)=>{
    try{
        const todo = new Todo(res.body);
        const result = await todo.save();
        
        res.send({status:"success", message:"Todo created successfully", result})
    }
    catch(error){
        res.send({
            status:"error",
            message:"todo creation failed",
            error,
        })
    }
    
}

const getTodo = async (req, res)=>{

    try{
        const todos = await Todo.find({})
    
        res.send({
            status:"success", 
            message:"Todo created successfully",
            data:todos,
        })
    }
    catch(error){
        res.send({
            status:"error",
            message:"todos Get successfully",
            error,
        })
    }
}

const updateTodo = async (req, res)=>{
    try{
        const id = req.body._id;
        //record find
        const todo = await Todo.findById(id)
        //change set
        todo.userName = req.body.userName;
        todo.mobile = req.body.mobile;
        //save
        await todo.save();
        res.send({
            status:"success", 
            message:"Todo updated successfully",
            data:todo,
        })
    }
    catch(error){
        res.send({
            status:"error",
            message:"todos Get failed",
            error,
        })
    }
}

const deleteTodo = async (req, res)=>{
    try{
        const id = req.body._id;
        const todo = await Todo.find({id})
        await todo.delete();
        res.send({
            status:"success", 
            message:"Todo deleted successfully",
            data:todo,
        })
    }
    catch(error){
        res.send({
            status:"error",
            message:"todos deletion failed",
            error,
        })
    }
}
module.exports = {createTodo, updateTodo, getTodo, deleteTodo }