const Users = require('../models/userModle.js');
const {validateEmail, validateLength, validationUsername} = require('../helpers/validation.js');
const bcrypt = require('bcrypt');
const { jwt } = require('../helpers/token.js');
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
        };

        const checkEmail = await Users.findOne({email});

        if(checkEmail){
            return res.status(400).json({
                message: "Email Already Exits"
            })
        };

        if(!validateLength(fName,3,15)){
            return res.status(400).json({
                message: "First Name should be 3 and last 15 charactors"
            })
        };

        if(!validateLength(lName,3,15)){
            return res.status(400).json({
                message: "Last Name should be 3 and last 15 charactors"
            })
        };

        if(!validateLength(password,8,40)){
            return res.status(400).json({
                message: "Password Should be Minimum 8 Charators"
            })
        };

        //bcrypt password 
        const crypted = await bcrypt.hash(password,10);

        //validation username 
        let temUsername = fName + lName;
        let finalUsername = await validationUsername(temUsername);


        const user = await new Users({
            fName,
            lName,
            username:finalUsername,
            email,
            password:crypted,
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

        const emailToken = jwt({id: user._id.toString()}, "30m");
        console.log(emailToken)

        res.send(user);

    } catch (error) {
        res.status(404).json({
            message: "Can not create user"
        })
    }
}