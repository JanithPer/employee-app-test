import { useState } from 'react'
import EmployeeTable from './components/EmployeeTable'

function App() {
  const [count, setCount] = useState(0)

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
          <button className="btn">Add New</button>
        </div>
      </div>
      
      <EmployeeTable />

    </div>
  )
}

export default App
