const mongoose = require("mongoose")

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"Doctor name is required"],
        trim: true
    },
    specialization:{
        type:String,
        required: [true, "Specialization is required"],
        trim:true
    },
    qualification:{
        type:String,
        required:[true,"Qualification is required"],
        trim:true
    },
    experience:{
        type:Number,
        default:0,
        min:0
    },
    consultationFees:{
        type:Number,
        required: true,
        min:0

    },
    phone:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        sparse:true,
        lowercase: true,
        trim: true
    },
    availableDays:[{
        type:String,
        enum:[
            "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday"
        ]
    }],
    startTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    },
    slotDuration: {
        type:String,
        default:15
    },
    roomnumber:{
        type:String,
        trim:true
    },
    isActive:{
        type:Boolean,
        default: true
    }
},{
    timestamp:true
});

module.exports = mongoose.model("Doctor",doctorSchema);