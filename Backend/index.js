let express=require("express");
const conectDb = require("./config/db");
let dotenv=require("dotenv")
dotenv.config()
conectDb()
let app=express()
app.use(express.json())
app.use("/user",require("./routes/userRoute"))
app.listen(5000)