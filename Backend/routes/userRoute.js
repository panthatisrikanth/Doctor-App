let express=require("express")
const { userreg, login } = require("../controller/userCon")

let route=express.Router()

route.post("/register",userreg)
route.post("/login",login)
module.exports=route