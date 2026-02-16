import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    employeeId: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    designation: { type: mongoose.Schema.Types.ObjectId, ref: 'Designation', required: true },
    dateOfJoin: { type: Date, required: true },
    isManager: { type: Boolean, default: false }
});

export default mongoose.model('Employee', employeeSchema);