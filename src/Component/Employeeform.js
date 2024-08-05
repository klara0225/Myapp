import React from "react";
import '../Employeeform.css';  // Make sure this path matches your project structure

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', title: '',
        department: '', phone: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const {name, email, phone} = this.state;
        const employeeId = Math.floor(Math.random() * 10000);
        const newEmployee = {
            id: employeeId,
            name: name,
            email: email,
            phone: phone
        };
        // Pass the new employee data to the parent component via props
        this.props.addEmployee(newEmployee);
        console.log("The form has been submitted.");
        console.log(`Employee ID: ${employeeId}`);
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${phone}`);
        this.setState({
            name: '',
            email: '',
            phone: '',
        });
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });  
    }

    render() {
        return (
            <>
                <h2 className="employee-list">
                    Add Employee
                </h2>
                <form onSubmit={this.handleSubmit} className="employee-form">
                    <div>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Phone:
                            <input
                                type="text"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <button type="submit">
                        Add
                    </button>
                </form>
                <h2 className="employee-list">
                    Employee List
                </h2>
            </>
        );
    }
}

export default EmployeeForm;
