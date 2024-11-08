const mongoose = require("mongoose");
const { Schema } = mongoose;

const permissionSchema = new Schema({
    permission_name: {
        type: String,
        required: true,
    },
});

const Permission = mongoose.model("Permission", permissionSchema);

module.exports = Permission;
