import express from 'express';
import desController from '../controllers/designationController.js';

const router = express.Router();

router.get('/', desController.getDesignations);

export default router;