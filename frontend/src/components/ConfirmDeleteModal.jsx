import { AlertTriangle } from 'lucide-react';

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, employeeName }) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-sm text-center">
        {/* Warning Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-error/10 p-3 rounded-full">
            <AlertTriangle className="text-error" size={32} />
          </div>
        </div>

        <h3 className="font-bold text-lg">Confirm Delete</h3>
        <p className="py-4">
          Are you sure you want to delete <span className="font-bold text-error">{employeeName}</span>? 
          This action cannot be undone.
        </p>

        <div className="modal-action justify-center gap-2">
          <button 
            className="btn btn-ghost" 
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="btn btn-error text-white" 
            onClick={onConfirm}
          >
            Yes, Delete
          </button>
        </div>
      </div>
      {/* Backdrop to close when clicking outside */}
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default ConfirmDeleteModal;