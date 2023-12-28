const userModel = require("../models/userModel")
let bcrypt=require("bcrypt")
const { v4: uuidv4 } = require('uuid');
let userreg=async(req,res)=>{
    let result=await userModel.findOne({"email":req.body.email})
    if(result==null){
        let hashcode=await bcrypt.hash(req.body.password,10)
        let data={"_id":uuidv4(),...req.body,"password":hashcode}
        new userModel(data).save().then(()=>{
            res.json({"msg":"account Created"})
        }).catch((err)=>{
            console.log(err)
        })
    }
    else{
        res.json({"msg":"email exist"})
    }
}

module.exports={userreg}