const jwt = require('jsonwebtoken');

exports.jwt = (user, expiresIn) => {
    return jwt.sign(user, process.env.SECRET_TOKEN, {
        expiresIn: expiresIn
    })
}