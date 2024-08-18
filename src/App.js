import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeForm from './Component/Employeeform';
import EmployeeList from './Component/Employeelist';

function App() {
  const [employees, setEmployees] = useState([]);

  // Function to add an employee
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };
  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));

  };
  useEffect(() => {
    const savedEmployees = localStorage.getItem('employees')
    if (saveData) {
      setEmployees(JSON.parse(savedEmployees))
    }
  }, [])

  return (


    <Router>
      <div className="App">
        <Routes>
        <Route path = "/" element={
                <div>
                    <EmployeeForm addEmployee={addEmployee}/>
                    <EmployeeList employees={employees}/>
                </div>}
            />
        </Routes>
        <button onClick={saveData}>Save Data</button>
      </div>
    </Router>
  );
}
export default App;
