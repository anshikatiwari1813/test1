const mongoose = required("mongoose");

const patientSchema = new mongoose.patientSchema({
    name: {
        type: String,
        required: [true, "Patient Name is required"],
        trim: true
    },
    phone: {
        type: String,
        required: [true, "Phone Number is required"],
        trim: true,
        index: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 120
    },
    gender: {
        type: String,
        enum: [
            "Male", "Female", "Other"
        ],
        required: true

    },
    address: {
        type: String,
        trim: true
    },
    totalVisits: {
        type: Number,
        default: 0

    },
    lastVisit: {
        type: Date
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Patient", patientSchema);