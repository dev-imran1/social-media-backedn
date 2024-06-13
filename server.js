const dotenv = require("dotenv");
dotenv.config();
const { connect } = require("./database/dbConfig.js")
const express = require("express");
const cors = require("cors");
const router = require("./routes");
// database connect func
connect()
//express & middlewares
const app = express();
app.use(cors())
app.use(router)

const Port = process.env.PORT || 8000
app.listen(Port, () => {
    console.log("hello mr")
})