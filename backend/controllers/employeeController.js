import Employee from '../models/Employee.js';
import Designation from '../models/Designation.js';

// Create a new employee
export const createEmployee = async (req, res) => {
    try {
        const { designation, fullName, ...otherBody } = req.body;
        let firstName, lastName;
        if (fullName) {
            const nameParts = fullName.split(' ');
            firstName = nameParts[0];
            lastName = nameParts.slice(1).join(' ');
        }
        
        if (designation) {
            const foundDesignation = await Designation.findById(designation);
            if (!foundDesignation) {
                return res.status(400).json({ message: 'Designation not found' });
            }
        }
        
        const newEmployee = new Employee({ ...otherBody, firstName, lastName, designation });
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all employees
export const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().populate('designation');
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single employee by ID
export const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id).populate('designation');
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an employee by ID
export const updateEmployee = async (req, res) => {
    try {
        const { fullName, ...otherBody } = req.body;
        const updateData = { ...otherBody };

        if (fullName) {
            const nameParts = fullName.split(' ');
            updateData.firstName = nameParts[0];
            updateData.lastName = nameParts.slice(1).join(' ');
        }

        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        ).populate('designation');
        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an employee by ID
export const deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
