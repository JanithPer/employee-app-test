import express from 'express';
import desController from '../controllers/designationController.js';

const router = express.Router();

router.get('/', desController.getDesignations);
router.post('/', desController.createDesignation);

export default router;