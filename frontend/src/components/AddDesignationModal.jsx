import React from 'react';

const AddDesignationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Mock data for the internal table
  const designations = [
    { id: 2, name: "Manager", remark: "asfsdf" },
    { id: 3, name: "Developer", remark: "test" },
  ];

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-lg mb-6 border-b pb-2 text-center">Add New Designations</h3>
        
        <form className="space-y-4 mb-6">
          {/* Designation Name Input */}
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-4">
              <span className="label-text w-32 font-semibold">Designation Name :</span>
              <input type="text" className="input input-bordered flex-1 input-sm" />
            </label>
          </div>

          {/* Remark Input */}
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-4">
              <span className="label-text w-32 font-semibold">Remark :</span>
              <input type="text" className="input input-bordered flex-1 input-sm" />
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
                <tr key={item.id}>
                  <td className="border">{item.id}</td>
                  <td className="border">{item.name}</td>
                  <td className="border">{item.remark}</td>
                </tr>
              ))}
              {/* Empty rows to mimic the UI screenshot */}
              {[...Array(3)].map((_, i) => (
                <tr key={`empty-${i}`} className="h-6">
                  <td className="border"></td>
                  <td className="border"></td>
                  <td className="border"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="modal-action justify-end gap-2">
          <button className="btn btn-sm px-6" onClick={onClose}>Close</button>
          <button className="btn btn-sm px-8 bg-gray-200 hover:bg-gray-300 text-black border-gray-400">Save</button>
          <button className="btn btn-sm px-8 bg-gray-200 hover:bg-gray-300 text-black border-gray-400">Reset</button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default AddDesignationModal;