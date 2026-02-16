import mongoose from "mongoose";

const designationSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

export default mongoose.model('Designation', designationSchema);