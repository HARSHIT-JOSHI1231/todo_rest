
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT||8080;

const todoRouter = require("./routers/todo")

const app = express();
app.use(express.json());

app.use("/",todoRouter);

const DATABASE_URL=process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL)
.then(()=>{app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server Started");
})})
.catch((err)=>{console.error(err)})





