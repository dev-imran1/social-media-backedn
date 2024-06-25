// const Users = require('../models/userModle.js');
exports.newUser = async (req, res) => {
    try {
        const {
            fName,
            lName,
            username,
            email,
            password,
            profilePicture,
            cover,
            bMonth,
            bDay,
            bYear,
            gender,
            verified,
            friends,
            followers
        } = req.body;

        const user = await new Users({
            fName,
            lName,
            username,
            email,
            password,
            profilePicture,
            cover,
            bMonth,
            bDay,
            bYear,
            gender,
            verified,
            friends,
            followers
        }).save();

        res.send(user);

    } catch (error) {
        res.status(404).json({
            message: "Can not create user"
        })
    }
}