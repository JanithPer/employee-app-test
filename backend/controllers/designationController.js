import Designation from '../models/Designation.js';

const getDesignations = async (req, res) => {
    try {
        const list = await Designation.find();
        res.json(list);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    getDesignations
};