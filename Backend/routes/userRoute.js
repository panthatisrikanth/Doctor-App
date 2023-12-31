let express=require("express")
const { userreg, login, getDoctorDetails } = require("../controller/userCon")
const { registerasDoctor } = require("../controller/doctorcon")

let route=express.Router()

route.post("/register",userreg)
route.post("/login",login)
route.post("/applyfordoctor",registerasDoctor)
route.get("/getdoctordetails",getDoctorDetails)
module.exports=route