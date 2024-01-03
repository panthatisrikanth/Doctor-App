let express=require("express")
const { userreg, login, getDoctorDetails,  islogin, isDoctor, bookAppointment, getUserAppointments } = require("../controller/userCon")
const { registerasDoctor, getDoctorAppointments, approveAppointment } = require("../controller/doctorcon")

let route=express.Router()

route.post("/register",userreg)
route.post("/login",login)
route.post("/applyfordoctor",registerasDoctor)
route.get("/getdoctordetails",islogin,isDoctor,getDoctorDetails)
route.post("/bookAppoinment",bookAppointment)
route.get("/getdoctorappoinments/:DoctorId",getDoctorAppointments)
route.get("/getuserappointments/:userId",getUserAppointments)
route.put("/approveAppointment",approveAppointment)
module.exports=route