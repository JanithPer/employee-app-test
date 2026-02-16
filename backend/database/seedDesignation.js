import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Designation from '../models/Designation.js';

dotenv.config({ path: '../.env' });

const seedDesignations = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Connected to MongoDB for seeding');

        // Clear existing designations to avoid duplicates
        await Designation.deleteMany({});
        console.log('🗑️  Cleared existing designations');

        const designations = [
            { designationId: 'dID001', name: 'developer', remarks: 'Software Developer' },
            { designationId: 'dID002', name: 'hr', remarks: 'Human Resources' }
        ];

        await Designation.insertMany(designations);
        console.log('🌱 Seeded designations: developer, hr');

    } catch (error) {
        console.error('❌ Error seeding designations:', error);
    } finally {
        await mongoose.disconnect();
        console.log('🔌 Disconnected from MongoDB');
    }
};

seedDesignations();