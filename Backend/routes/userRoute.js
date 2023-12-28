let express=require("express")
const { userreg } = require("../controller/userCon")

let route=express.Router()

route.post("/register",userreg)
module.exports=route