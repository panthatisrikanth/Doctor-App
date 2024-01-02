const userModel = require("../models/userModel")
let bcrypt=require("bcrypt")
const { v4: uuidv4 } = require('uuid');
let jwt=require("jsonwebtoken");
const doctorModel = require("../models/doctorModel");
const appointmentModel = require("../models/appointmentModel");
let userreg=async(req,res)=>{
    let result=await userModel.findOne({"email":req.body.email})
    if(result==null){
        let hashcode=await bcrypt.hash(req.body.password,10)
        let data={"_id":uuidv4(),...req.body,"password":hashcode}
        new userModel(data).save().then(()=>{
            res.json({"msg":"account Created",success:true})
        }).catch((err)=>{
            console.log(err)
        })
    }
    else{
        res.json({"msg":"email exist",success:false})
    }
}
let login=async(req,res)=>{
    let result=await userModel.findOne({"email":req.body.email})
    if(result==null){
        res.json({"msg":"check mail",success:false})
    }
    else{
        let f=await bcrypt.compare(req.body.password,result.password)
        if(f){
            res.json({
                "token":jwt.sign({"uid":req.body._id},process.env.JWT_SECRET),
                "email":result.email,
                "isAdmin":result.isAdmin,
                "isDoctor":result.isDoctor,
                success:true
            })
        }
        else{
            res.json({"msg":"check password",
            success:false
        })
        }
    }
}
let islogin=(req,res,next)=>{
    try{
        jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
        next()
    }
    catch(err)
    {
        console.log(err)
        res.json({
            "msg":"plz login",
            success:false
        })
    }
}
let isDoctor=async(req,res,next)=>{
    let result= await userModel.findOne({"email":req.headers.email})
    if(result.isDoctor){
        next()
    }
    else{
        res.send({"msg":"Your are not Doctor",success:false})
    }
}
let getDoctorDetails=async(req,res)=>{
    let data=await doctorModel.find({status:"Approved"})
    res.json(data)

}
let bookAppointment=async(req,res)=>{
    let result=await appointmentModel.find({"userId":req.body.userId,"DoctorId":req.body.DoctorId})
    if(!result.length==0){
        res.json({"msg":"You already Booked Appointment"})
    }
    else{
        let data={"_id":uuidv4(),...req.body}
        new appointmentModel(data).save().then(()=>{
            res.json({"msg":"Appointment booked"})
        }).catch((err)=>{
            console.log(err)
        })
    }
}
module.exports={userreg,login,getDoctorDetails,islogin,isDoctor,bookAppointment}