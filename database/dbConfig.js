const mongooes = require("mongoose");

exports.connect = () => {
    mongooes.connect(process.env.MONGODB_URL).then(() => {
        console.log("database connected")
    })
}