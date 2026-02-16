import { useState } from 'react'
import EmployeeTable from './components/EmployeeTable'
import AddEmployeeModal from './components/AddEmployeeModal';

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className='m-4'>
      <div className='flex justify-center'>
        <div>
          <div className="badge badge-xl">Employee Tracker</div>
          <div className="badge badge-soft badge-primary">By Janith Perera</div>
        </div>
      </div>
      
      <div className='flex justify-between'>
        <button className="btn">Add Designation</button>
        <div>
          <button className="btn">Refresh</button>
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
    </div>
  )
}

export default App
