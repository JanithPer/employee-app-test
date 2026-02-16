import React, { useState, useEffect } from 'react';

const EditEmployeeModal = ({ isOpen, onClose, onSave, employee }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        designation: '',
        dateOfJoin: '',
        isManager: false,
    });
    const [designations, setDesignations] = useState([]);

    useEffect(() => {
        if (employee) {
            setFormData({
                fullName: `${employee.firstName} ${employee.lastName}`,
                designation: employee.designation?._id || '',
                dateOfJoin: employee.dateOfJoin ? new Date(employee.dateOfJoin).toISOString().split('T')[0] : '',
                isManager: employee.isManager || false,
            });
        }
    }, [employee]);

    useEffect(() => {
        if (isOpen) {
            const fetchDesignations = async () => {
                try {
                    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/designations`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setDesignations(data);
                } catch (error) {
                    console.error('Fetch error:', error);
                }
            };
            fetchDesignations();
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/employees/${employee._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to update employee');
            }
            onSave();
        } catch (error) {
            console.error('Submit error:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal modal-open">
            <div className="modal-box max-w-md">
                <h3 className="font-bold text-lg mb-4 border-b pb-2">Employee ID: <span className="text-gray-400 font-normal">{employee?.employeeId}</span></h3>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-4">
                            <span className="label-text w-24 font-semibold">Full Name</span>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="input input-bordered flex-1" placeholder="Enter name" required />
                        </label>
                    </div>

                    {/* Designation */}
                    <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-4">
                            <span className="label-text w-24 font-semibold">Designation</span>
                            <select name="designation" value={formData.designation} onChange={handleChange} className="select select-bordered flex-1" required>
                                <option value="" disabled>Select Designation</option>
                                {designations.map(d => (
                                    <option key={d._id} value={d._id}>{d.name}</option>
                                ))}
                            </select>
                        </label>
                    </div>

                    {/* Date of Join */}
                    <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-4">
                            <span className="label-text w-24 font-semibold">Date of Join</span>
                            <input type="date" name="dateOfJoin" value={formData.dateOfJoin} onChange={handleChange} className="input input-bordered flex-1" required />
                        </label>
                    </div>

                    {/* Is Manager Checkbox */}
                    <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-4">
                            <input type="checkbox" name="isManager" checked={formData.isManager} onChange={handleChange} className="checkbox checkbox-primary" />
                            <span className="label-text font-semibold">Is Manager</span>
                        </label>
                    </div>

                    {/* Action Buttons */}
                    <div className="modal-action">
                        <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
            <div className="modal-backdrop" onClick={onClose}></div>
        </div>
    );
};

export default EditEmployeeModal;