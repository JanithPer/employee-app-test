import { useState, useEffect } from 'react';
import { Pencil, Trash2 } from 'lucide-react'; // Standard modern icons
import EditEmployeeModal from './EditEmoloyeeModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';

const EmployeeTable = () => {

    const [employees, setEmployees] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/employees`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setEmployees(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchEmployees();
    }, []);

    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                <thead>
                    <tr className="text-base-content">
                        <th>Emp ID</th>
                        <th>Designation</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Join</th>
                        <th className="text-center">Actions</th> {/* New Column Header */}
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp._id} className="hover">
                            <th className="font-mono">{emp.employeeId}</th>
                            <td>{emp.designation?.name}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{new Date(emp.dateOfJoin).toLocaleDateString()}</td>
                            <td className="flex justify-center gap-2">
                                {/* Edit Button */}
                                <button
                                    className="btn btn-ghost btn-sm btn-square tooltip"
                                    onClick={() => setIsEditModalOpen(true)}
                                    data-tip="Edit Employee"
                                >
                                    <Pencil size={18} className="text-info" />
                                </button>

                                {/* Delete Button */}
                                <button
                                    className="btn btn-ghost btn-sm btn-square tooltip"
                                    onClick={() => setIsDeleteModalOpen(true)}
                                    data-tip="Delete Employee"
                                >
                                    <Trash2 size={18} className="text-error" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            {/* Modals */}
            <EditEmployeeModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
            />
            <ConfirmDeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
            />
        </div>
    );
};

export default EmployeeTable;