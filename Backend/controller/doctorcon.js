const appointmentModel = require("../models/appointmentModel")
const doctorModel = require("../models/doctorModel")
const userModel = require("../models/userModel")

let registerasDoctor=async(req,res)=>{
    let result=await doctorModel.findOne({"doctorId":req.body.doctorId})
    if(result==null){
        
        let data={...req.body}
        new doctorModel(data).save().then(()=>{
            res.json({"msg":"You register as doctor is sucess",
        "data":data
    })
            
        }).catch((err)=>{
            res.json({"msg":"Error while regiser as doctor"})
        })
    }
    else{
        res.json({"msg":"Your already  Register as a doctor"})
    }
}
let getDoctorAppointments=async(req,res)=>{
    let data=await appointmentModel.find({"DoctorId":req.params.DoctorId})
    res.send(data)

}
let approveAppointment=async(req,res)=>{
    await appointmentModel.findOneAndUpdate({"_id":req.body._id},{$set:{status:"Approved"}})
    res.send({"msg":"Appointment Updated"})
}
module.exports={registerasDoctor,getDoctorAppointments,approveAppointment}