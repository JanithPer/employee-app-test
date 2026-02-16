import { useState, useEffect } from 'react';

const AddDesignationModal = ({ isOpen, onClose }) => {
    const [designations, setDesignations] = useState([]);
    const [formData, setFormData] = useState({ name: '', remarks: '' });

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

    useEffect(() => {
        if (isOpen) {
            fetchDesignations();
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/designations`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to create designation');
            }
            
            window.location.reload();
        } catch (error) {
            console.error('Save error:', error);
        }
    };

    const handleReset = (e) => {
        e.preventDefault();
        setFormData({ name: '', remarks: '' });
    };

    if (!isOpen) return null;

    return (
        <div className="modal modal-open">
            <div className="modal-box max-w-2xl">
                <h3 className="font-bold text-lg mb-6 border-b pb-2 text-center">Add New Designations</h3>

                <form className="space-y-4 mb-6">
                    {/* Designation Name Input */}
                    <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-4">
                            <span className="label-text w-32 font-semibold">Designation Name :</span>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="input input-bordered flex-1 input-sm" />
                        </label>
                    </div>

                    {/* Remark Input */}
                    <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-4">
                            <span className="label-text w-32 font-semibold">Remark :</span>
                            <input type="text" name="remarks" value={formData.remarks} onChange={handleChange} className="input input-bordered flex-1 input-sm" />
                        </label>
                    </div>
                </form>

                {/* Internal Table Area */}
                <div className="border rounded-md overflow-hidden bg-base-200/50 mb-6">
                    <table className="table table-xs w-full bg-white">
                        <thead className="bg-base-200">
                            <tr>
                                <th className="border">Id</th>
                                <th className="border">Name</th>
                                <th className="border">Remark</th>
                            </tr>
                        </thead>
                        <tbody>
                            {designations.map((item) => (
                                <tr key={item._id}>
                                    <td className="border">{item.designationId}</td>
                                    <td className="border">{item.name}</td>
                                    <td className="border">{item.remarks}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Action Buttons */}
                <div className="modal-action justify-end gap-2">
                    <button className="btn btn-sm px-6" onClick={onClose}>Close</button>
                    <button className="btn btn-sm px-8 bg-gray-200 hover:bg-gray-300 text-black border-gray-400" onClick={handleSave}>Save</button>
                    <button className="btn btn-sm px-8 bg-gray-200 hover:bg-gray-300 text-black border-gray-400" onClick={handleReset}>Reset</button>
                </div>
            </div>
            <div className="modal-backdrop" onClick={onClose}></div>
        </div>
    );
};

export default AddDesignationModal;