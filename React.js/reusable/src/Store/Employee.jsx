import React, { Component } from "react";
import { connect } from "react-redux";

class Employee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // person: {
            //     fname: "",
            //     lname: "",
            //     email: "",
            // },

            employees: "",
            editindex: null,
        }
    }
    handleform = (e) => {
        const { name, value } = e.target;
        this.setState({
            person: {
                ...this.state.person,
                [name]: value,
            }
        });
    }

    adduser = () => {
        const updatedEmployees = [...this.state.employees, this.state.person];
        this.props.dispatch({
            type: "Create",
            payload: {
                employees: updatedEmployees
            }
        });
        this.setState({
            employees: updatedEmployees,
            person: { fname: "", lname: "", email: "" }
        });
    }

    updateuser = () => {
        const updatedEmployees = [...this.state.employees];
        updatedEmployees[this.state.editindex] = this.state.person;

        this.props.dispatch({
            type: "Update",
            payload: {
                employees: updatedEmployees,
                index: this.state.editindex
            }
        });

        this.setState({
            employees: updatedEmployees,
            person: { fname: "", lname: "", email: "" },
            editindex: null
        });
    }

    edit = (emp, i) => {
        this.setState({ person: emp, editindex: i })
    }
    delete = (emp) => {
        this.props.dispatch({
            type: "Delete",
            payload: emp,
        })

    }

    render() {
        console.log(this.props)

        // return (<div>
        //     

        //     <ul>
        //         {this.props.employee.map((emp) => {
        //             return <li>{emp}</li>
        //         })}
        //     </ul>
        // </div>)
        return (<div>
            <h1>Employee details</h1>
            <label htmlFor="">fname</label>
            <input type="text" name="fname" id="" value={this.props.person.fname} onChange={this.handleform} />{""}
            <br />
            <label htmlFor="">lname</label>
            <input type="text" name="lname" id="" value={this.props.person.lname} onChange={this.handleform} />{""}
            <br />
            <label htmlFor="">email</label>
            <input type="text" name="email" id="" value={this.props.person.email} onChange={this.handleform} />{""}
            <br />
            {this.state.editindex === null ? <button type="button" onClick={this.adduser} >Add user</button> : <button type="button" onClick={this.updateuser} >Update user</button>}
            <table border={1}>
                <thead>
                    <tr><th>fname</th>
                        <th>lname</th>
                        <th>email</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.employees.map((emp, i) => {
                        return (
                            <tr key={i}>
                                <td>{emp.fname}</td>
                                <td>{emp.lname}</td>
                                <td>{emp.email}</td>
                                <td><button type="button" onClick={() => this.edit(emp, i)}>Edit</button></td>
                                <td><button type="button" onClick={() => this.delete(emp)}>Delete</button></td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>)
    }

}
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Employee)