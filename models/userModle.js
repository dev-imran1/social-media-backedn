// const mongooes = require('mongoose');
// const Schema = mongooes.Schema;
// const { objectId } = mongooes.Schema;

// const UserModel = new Schema(
//     {
//         fName: {
//             type: String,
//             require: true,
//             trim: true,
//             text: true
//         },
//         lName: {
//             type: String,
//             require: true,
//             trim: true,
//             text: true
//         },
//         username: {
//             type: String,
//             require: true,
//             trim: true,
//             text: true,
//             unique: true
//         },
//         email: {
//             type: String,
//             require: true,
//             trim: true
//         },
//         password: {
//             type: String,
//             require: true,
//             trim: true
//         },
//         profilePicture: {
//             type: String,
//             default: ""
//         },
//         cover: {
//             type: String,
//             trim: true
//         },
//         bMonth: {
//             type: Number,
//             require: true,
//             trim: true
//         },
//         bDay: {
//             type: Number,
//             require: true,
//             trim: true
//         },
//         bYear: {
//             type: Number,
//             require: true,
//             trim: true
//         },
//         gender: {
//             type: String,
//             require: true
//         },
//         verified: {
//             type: Boolean,
//             default: false
//         },
//         friends: [
//             {
//                 type: objectId,
//                 ref: "usermodel"
//             }
//         ],
//         followers: [
//             {
//                 type: objectId,
//                 ref: "usermodel"
//             }
//         ],
//         request: [
//             {
//                 type: objectId,
//                 ref: "usermodel"
//             }
//         ],
//         search: [
//             {
//                 user: {
//                     type: objectId,
//                     ref: "usermodel",
//                     require: true,
//                     text: true
//                 },
//                 createdAt: {
//                     type:Date,
//                     require:true
//                 }
//             }
//         ],
//         details:{
//             bio:{
//                 type:String
//             },
//             othername:{
//                 type:String
//             },
//             job:{
//                 type:String
//             },
//             currentcity:{
//                 type:String
//             },
//             workplace:{
//                 type:String
//             },
//             college:{
//                 type:String
//             },
//             highschool:{
//                 type:String
//             },
//             hometown:{
//                 type:String
//             },
//             relationship:{
//                 type:String,
//                 enum:[
//                     "single",
//                     "in a Relationshi",
//                     "Complicated",
//                     "Married",
//                     "Divorced"
//                 ]
//             },
//             instagram:{
//                 type:String
//             }
//         },
//         savePosts:[
//             {
//                 post:{
//                     type:objectId,
//                     ref:"post"
//                 },
//                 savedAt:{
//                     type:Date,
//                     require:true
//                 }
//             }
//         ]
//     },
//     {
//         timestamps:true
//     }
// )

// module.exports = mongooes.model("usermodel", UserModel);


const mongoose = require("mongoose")
const { Schema } = mongoose;
const {ObjectId} = mongoose.Schema

const UserModel = new Schema({
    fName:{
        type:String,
        require:true,
        trim:true,
        text:true
    },
    lName:{
        type:String,
        require:true,
        trim:true,
        text:true
    },
    email:{
        type:String,
        require:true,
        trim:true,
        
    },
    username:{
        type:String,
        unique:true,
        trim:true,
        text:true
    },
    phoneNumber:{
        type:Number,
        require:true,
        trim:true
    },
    password:{
        type: String,
        require:true
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPhoto:{
        type:String,
        trim:true
    },

    bDay:{
        type:Number,
        require:true,
        trim:true
    },
    bMonth:{
        type:Number,
        require:true,
        trim:true
    },
    bYears:{
        type:Number,
        require:true,
        trim:true
    },
    verified:{
        type:Boolean,
        default:false
    },
    friends:[
        {
        type: ObjectId,
        ref:"usersmodel"
    }
],
followers:[
    {
        type: ObjectId,
        ref:"usersmodel"
    }
],
following:[
    {
        type: ObjectId,
        ref:"usersmodel"
    }
],
request:[
    {
        type: ObjectId,
        ref:"usersmodel"
    }
],

search:[
    {
        user:{
            type:ObjectId,
            ref:"usersmodel",
            text: true,
            require:true

        },
        createPost:{
            type:Date,
            require:true,
        }
    }
],

details:{
    boi:{
        type:String,
        
    },
    job:{
        type:String,
        
    },
    city:{
        type:String,
        
    },
    school:{
        type:String,
        
    },
    college:{
        type:String,
        
    },
    homeToen:{
        type:String,
        
    },
    relationship:{
        type:String,
        enum:["single","married"]
        
        
    },
    instagram:{
        type:String
    }
    
},
savepost:[
    {
        post:{
            type:ObjectId,
            ref:"post"
        },
        savetime:{
            type:Date,
            require:true
        }
    }
]

},{
    timestamps:true
})

module.exports = mongoose.model("usersmodel",UserModel)