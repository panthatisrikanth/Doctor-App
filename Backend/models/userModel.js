let mongoose=require("mongoose")

let userSchema=new mongoose.Schema({
    "_id":String,
    name:{
        type:String,
        required: [true, "name is require"],
    },
    email:{
        type:String,
        required:[true,"Email is require"]
    },
    password:{
        type:String,
        required:[true,"Password is require"]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isDoctor:{
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.model("user",userSchema)