const express = require('express');
const router = express.Router();
const auth = require("./auth.js")


// router.get("/", (req,res)=>{
//     console.log("from api")
// })

router.use("/", auth)

module.exports = router