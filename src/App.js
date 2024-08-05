import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeForm from './Component/Employeeform';

function App() {
  const [employees, setEmployees] = useState([]);

  // Function to add an employee
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
  <Router>
    <div className="App">
        <Routes>
            <Route path = "/" element={<EmployeeForm addEmployee={addEmployee}/>}/>
        </Routes>
    </div>
  </Router>
  );
}
export default App;
