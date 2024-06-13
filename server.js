const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors())

app.get('/', (req, res)=>{
    res.send("this is home page")
})
app.get('/registration', (req, res)=>{
    res.send("this is registration page")
})

const Port = process.env.PORT || 8000
app.listen(Port, ()=>{
    console.log("hello mr")
})