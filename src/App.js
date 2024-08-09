import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeForm from './Component/Employeeform';

function App() {
  const [employees, setEmployees] = useState([]);

  // Function to add an employee
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };
  const saveData = () =>{
    localStorage.setItem('employees', JSON.stringify(employees));

  };
  return (
    
  <Router>
    <div className="App">
        <Routes>
            <Route path = "/" element={<EmployeeForm addEmployee={addEmployee}/>}/>
        </Routes>
        <button onClick={saveData}>Save Data</button>
    </div>
  </Router>
  );
}
export default App;
