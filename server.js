const express = require("express");

const app = express();

app.get('/', (req, res)=>{
    res.send("this is home page")
})
app.get('/registration', (req, res)=>{
    res.send("this is registration page")
})

app.listen(8000, ()=>{
    console.log("hello mr")
})