const express = require('express');
const { createDoctor, getDoctor, getSingleDoctor, updateDoctor, statusDoctor, getAllAppointments } = require('../controllers/doctorController');
const router = express.Router();

router.post("/",createDoctor);
router.get("/",getDoctor);
router.get("/:id",getSingleDoctor);
router.put("/:id",updateDoctor);
router.patch("/:id",statusDoctor);
router.get("/:id/appointments", getAllAppointments);

module.exports = router;