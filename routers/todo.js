const {createTodo, updateTodo, getTodo, deleteTodo} = require("../controllers/todo");

const express = require("express");

const router = express.Router();

//POST
router.post("/",createTodo);

//PUT
router.put("/",updateTodo)

//GET
router.get("/",getTodo);

//DELETE
router.delete("/",deleteTodo)


module.exports = router;