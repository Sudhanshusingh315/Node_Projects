const Permission = require("../models/permissionModel");
const { validationResult } = require("express-validator");

const addPermission = async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            error: error.array(),
        });
    }

    try {
        const { permission_name } = req.body;

        // check is the permission exists
        let permission = null;

        permission = await Permission.findOne({ permission_name });
        console.log("permissoin find one ",permission);
        if (permission == null) {
            console.log("permission does not exists");
            
            let newPermission = new Permission({
                permission_name,
            })

            permission = await newPermission.save();
            console.log("permissoin is ",permission);
            return res.status(201).json({
                success: true,
                message: "New Permission is created",
                data: permission,
            });
        }

        return res.status(403).json({
            success: false,
            message: "Permisson already exits",
            data: null,
        });
    } catch (err) {
        console.log(`Error is ${JSON.stringify(error)}`);
        return res.status(400).json({
            success: false,
            message: "Something went wrong",
            data: null,
        });
    }
};

module.exports = {
    addPermission,
};
