import Employee from '../models/Employee.js';

const saveEmployee = async (req, res) => {
    try {
        const { employeeId, fullName, designation, dateOfJoin, isManager } = req.body;

        // Exam Requirement: Split Full Name into First and Last Name
        // Logic: First word = FirstName, the rest = LastName
        const nameParts = fullName.trim().split(" ");
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(" ") || ""; // Handle case with no last name

        const newEmployee = new Employee({
            employeeId,
            firstName,
            lastName,
            designation,
            dateOfJoin,
            isManager
        });

        await newEmployee.save();
        const populatedEmployee = await Employee.findById(newEmployee._id).populate('designation');
        res.status(201).json({ message: "Employee saved successfully!", data: populatedEmployee });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllEmployees = async (req, res) => {
    const employees = await Employee.find().populate('designation');
    res.json(employees);
};

const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { fullName, designation, dateOfJoin, isManager } = req.body;

        // Re-apply split logic for updates
        const nameParts = fullName.trim().split(" ");
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(" ");

        // Note: employeeId is typically excluded from updates to keep it read-only
        const updated = await Employee.findByIdAndUpdate(id, {
            firstName,
            lastName,
            designation,
            dateOfJoin,
            isManager
        }, { new: true }).populate('designation');

        res.json(updated);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted successfully" });
};

export default {
    saveEmployee,
    getAllEmployees,
    updateEmployee,
    deleteEmployee
};