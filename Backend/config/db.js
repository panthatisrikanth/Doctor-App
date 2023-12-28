let mongoose=require("mongoose")

let conectDb=async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database Connected")
    }
    catch(error){
        console.log(error)
    }

}
module.exports=conectDb