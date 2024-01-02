let mongoose=require('mongoose')

let appoinmentModel=new mongoose.Schema({
    "_id":String,
    userId:{
        type:String,
        required:true
    },
    DoctorId:{
        type:String,
        required:true
    },
    userInfo:{
        type:String,
        required:true
    },
    doctorInfo:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    },
    visited:{
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.model("appoinrments",appoinmentModel)