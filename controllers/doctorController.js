const Doctor = require("../models/Doctor");
const Appointment = require("../models/Appointment");

const createDoctor = (req, res, next) => {
    try {
        const doctor = await Doctor.create(req.body);
        res.status(201).json({
            success: true,
            message: "Doctor registered successfully",
            data: doctor
        });
    } catch (error) {
        next(error)
    }
};

const getDoctor = async  (req,res,next) => {
    try{
        const {specialization, search, active } = req,query;
    }catch (error){
        next(error);
    }
};