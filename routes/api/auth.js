const express = require('express');
const router = express.Router();

router.get("/", (req,res)=>{
    console.log("from api")
})

module.exports = router