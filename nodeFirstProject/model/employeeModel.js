const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
  name: { type: String, required: true }, // String is shorthand for {type: String}
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },
});


const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;