import mongoose from "mongoose";

const designationSchema = new mongoose.Schema({
    designationId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    remarks: {type: String}
});

export default mongoose.model('Designation', designationSchema);