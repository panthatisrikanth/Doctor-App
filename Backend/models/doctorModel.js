let mongoose=require("mongoose")

let doctorSchema=new mongoose.Schema({
	doctorId:{
		type:String,
	},
	firstName:{
		type:String,
		required:[true,"firstName is required"]
	},
	lastName:{
		type:String,
		required:[true,"lastName is required"]
	},
	phone:{
		type:Number,
		required:[true,"phone is required"]
	},
	email:{
		type:String,
		required:[true,"Email is required"]
	},
	address:{
		type:String,
		required:[true,"address is required"]
	},
	specialization:{
		type:String,
		required:[true,"specialization is required"]
	},
	feesPerConsultation:{
		type:String,
		required:[true,"feesPerCunsaltation is required"]
	},
	status:{
		type:String,
		default:"pending"
	},
	timings: {
		from: {
		  type: String,
		  required: [true, "From time is required"],
		  validate: {
			validator: (value) => /^\d{2}:\d{2}$/.test(value),
			message: "Invalid from time format (hh:mm)",
		  },
		},
		to: {
		  type: String,
		  required: [true, "To time is required"],
		  validate: {
			validator: (value) => /^\d{2}:\d{2}$/.test(value),
			message: "Invalid to time format (hh:mm)",
		  },
		},
	  },
},{ timestamps: true }
)
module.exports=mongoose.model("doctors",doctorSchema)