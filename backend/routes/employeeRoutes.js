import express from 'express';
import empController from '../controllers/employeeController.js';

const router = express.Router();

router.post('/', empController.saveEmployee);
router.get('/', empController.getAllEmployees);
router.put('/:id', empController.updateEmployee);
router.delete('/:id', empController.deleteEmployee);

export default router;