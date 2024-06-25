const Users = require('../models/userModle.js');
const {validateEmail, validateLength} = require('../helpers/validation.js')
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

        if(!validateEmail(email)){
            return res.status(400).json({
                message: "Invalid Email"
            })
        }

        const checkEmail = await Users.findOne({email});

        if(checkEmail){
            return res.status(400).json({
                message: "Email Already Exits"
            })
        }

        if(!validateLength(fName,3,15)){
            return res.status(400).json({
                message: "First Name should be 3 and last 15 charactors"
            })
        }
        if(!validateLength(lName,3,15)){
            return res.status(400).json({
                message: "Last Name should be 3 and last 15 charactors"
            })
        }

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