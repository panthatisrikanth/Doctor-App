let express=require("express");
const conectDb = require("./config/db");
let dotenv=require("dotenv")
let cors=require('cors')
dotenv.config()
conectDb()
let app=express()
app.use(cors())
app.use(express.json())
app.use("/user",require("./routes/userRoute"))
app.listen(5000)