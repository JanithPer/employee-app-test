import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// Import Routes
import employeeRoutes from './routes/employeeRoutes.js';
import designationRoutes from './routes/designationRoutes.js';

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Register Routes
app.use('/api/employees', employeeRoutes);
app.use('/api/designations', designationRoutes);

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});