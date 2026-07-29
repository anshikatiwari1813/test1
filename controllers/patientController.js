const Patient = require("../models/Patient");

const getPatient = async (req, res, next) => {
    try {
        const { search } = req.query;
        const filter = {};
        if (search) {
            filter.$or = [
                {
                    name: {
                        $regrex: search,
                        $options: "i"
                    }
                }, {
                    phone: {
                        $regrex: search,
                        $options: "i"
                    }
                }

            ]
        }
        const patient = await Patient.find(filter)
            .sort({ createdAt: -1 });
        res, json({
            success: true,
            count: patient.lent,
            data: patient
        });

    } catch (error) {
        next(error);
    }
};