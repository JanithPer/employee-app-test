import { useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react'; // Standard modern icons
import EditEmployeeModal from './EditEmoloyeeModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';

const EmployeeTable = () => {

   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const employees = [
    { id: "101", designation: "Software Engineer", firstName: "Alice", lastName: "Johnson", dateOfJoin: "2023-01-15" },
    { id: "102", designation: "Product Manager", firstName: "Bob", lastName: "Smith", dateOfJoin: "2022-11-03" },
    { id: "103", designation: "UX Designer", firstName: "Charlie", lastName: "Davis", dateOfJoin: "2023-05-20" },
    { id: "104", designation: "QA Lead", firstName: "Diana", lastName: "Prince", dateOfJoin: "2021-08-12" },
    { id: "105", designation: "DevOps Engineer", firstName: "Ethan", lastName: "Hunt", dateOfJoin: "2024-02-01" },
  ];

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
            <tr key={emp.id} className="hover">
              <th className="font-mono">{emp.id}</th>
              <td>{emp.designation}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.dateOfJoin}</td>
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