import { useState } from 'react'
import EmployeeTable from './components/EmployeeTable'
import AddEmployeeModal from './components/AddEmployeeModal';
import AddDesignationModal from './components/AddDesignationModal';

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDesignationModalOpen, setIsDesignationModalOpen] = useState(false);

  return (
    <div className='m-4'>
      <div className='flex justify-center'>
        <div>
          <div className="badge badge-xl">Employee Tracker</div>
          <div className="badge badge-soft badge-primary">By Janith Perera</div>
        </div>
      </div>
      
      <div className='flex justify-between'>
        <button 
          className="btn"
          onClick={() => {setIsDesignationModalOpen(true)}}
        >
          Add Designation
        </button>
        <div>
          <button 
            className="btn"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
          <button 
          className="btn"
          onClick={() => {setIsAddModalOpen(true)}}
          >
            Add New
          </button>
        </div>
      </div>
      
      <EmployeeTable />

      {/* Modals */}
          <AddEmployeeModal 
            isOpen={isAddModalOpen} 
            onClose={() => setIsAddModalOpen(false)} 
          />
          <AddDesignationModal 
            isOpen={isDesignationModalOpen} 
            onClose={() => setIsDesignationModalOpen(false)} 
          />
    </div>
  )
}

export default App
