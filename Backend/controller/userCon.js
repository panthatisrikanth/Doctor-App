const userModel = require("../models/userModel")
let bcrypt=require("bcrypt")
const { v4: uuidv4 } = require('uuid');
let jwt=require("jsonwebtoken")
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
        res.json({"msg":"email exist",success:false})
    }
}
let login=async(req,res)=>{
    let result=await userModel.findOne({"email":req.body.email})
    if(result==null){
        res.json({"msg":"check mail"})
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

module.exports={userreg,login}