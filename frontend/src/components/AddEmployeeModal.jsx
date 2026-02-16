import React from 'react';

const AddEmployeeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-md">
        <h3 className="font-bold text-lg mb-4 border-b pb-2">Employee ID: <span className="text-gray-400 font-normal">Auto-generated</span></h3>
        
        <form className="space-y-4">
          {/* Full Name */}
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-4">
              <span className="label-text w-24 font-semibold">Full Name</span>
              <input type="text" className="input input-bordered flex-1" placeholder="Enter name" />
            </label>
          </div>

          {/* Designation */}
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-4">
              <span className="label-text w-24 font-semibold">Designation</span>
              <select className="select select-bordered flex-1">
                <option disabled selected>Select Designation</option>
                <option>Software Engineer</option>
                <option>Product Manager</option>
                <option>Designer</option>
              </select>
            </label>
          </div>

          {/* Date of Join */}
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-4">
              <span className="label-text w-24 font-semibold">Date of Join</span>
              <input type="date" className="input input-bordered flex-1" />
            </label>
          </div>

          {/* Is Manager Checkbox */}
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-4">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text font-semibold">Is Manager</span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="modal-action">
            <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default AddEmployeeModal;