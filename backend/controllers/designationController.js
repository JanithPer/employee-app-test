import Designation from '../models/Designation.js';

const getDesignations = async (req, res) => {
    try {
        const list = await Designation.find();
        res.json(list);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createDesignation = async (req, res) => {
    try {
        const { name, remarks } = req.body;

        const lastDesignation = await Designation.findOne().sort({ designationId: -1 });
        let newDesignationId;
        if (lastDesignation) {
            const lastIdNumber = parseInt(lastDesignation.designationId.replace('dID', ''), 10);
            const newIdNumber = lastIdNumber + 1;
            newDesignationId = 'dID' + String(newIdNumber).padStart(3, '0');
        } else {
            newDesignationId = 'dID001';
        }

        const newDesignation = new Designation({
            designationId: newDesignationId,
            name,
            remarks
        });

        const savedDesignation = await newDesignation.save();
        res.status(201).json(savedDesignation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateDesignation = async (req, res) => {
    try {
        const updatedDesignation = await Designation.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedDesignation) {
            return res.status(404).json({ message: 'Designation not found' });
        }
        res.status(200).json(updatedDesignation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteDesignation = async (req, res) => {
    try {
        const deletedDesignation = await Designation.findByIdAndDelete(req.params.id);
        if (!deletedDesignation) {
            return res.status(404).json({ message: 'Designation not found' });
        }
        res.status(200).json({ message: 'Designation deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getDesignationById = async (req, res) => {
    try {
        const designation = await Designation.findById(req.params.id);
        if (!designation) {
            return res.status(404).json({ message: 'Designation not found' });
        }
        res.status(200).json(designation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    getDesignations,
    createDesignation,
    updateDesignation,
    deleteDesignation,
    getDesignationById
};