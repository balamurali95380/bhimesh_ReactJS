import React, { Component } from "react";
import { connect } from "react-redux"
import { addEmployee, deleteEmployee, updateEmployee } from "./Actionfile";

class Employeecrud extends Component {
    constructor() {
        super()
        this.state = {
            employees: {
                fname: "",
                lname: "",
                email: "",
                password: "",
            },
            inx: null
        }
    }
    handleevent = (e) => {
        const newemployee = { ...this.state.employees }
        newemployee[e.target.name] = e.target.value
        this.setState({ employees: newemployee })

    }
    addemployee = () => {
        this.props.dispatch(addEmployee(this.state.employees))
        this.setState({
            employees: {
                fname: "",
                lname: "",
                email: "",
                password: "",
            }

        })

    }

    deleteemployee = (emp) => {
        this.props.dispatch(deleteEmployee(emp))

    }
    editemployee = (emp, i) => {
        this.setState({employees:emp,inx:i})
     }

    updateemployee = (emp) => {
        const data={value:this.state.employees,index:this.state.inx}
        this.props.dispatch(updateEmployee(data))
        this.setState({ employees: {
            fname: "",
            lname: "",
            email: "",
            password: "",
        },inx:null})

    }
    render() {
        return (<div class="container text-center">
            <form action="">
                <label htmlFor="">First name:</label>
                <input type="text" name="fname" value={this.state.employees.fname} onChange={this.handleevent} />{""}
                <br /><label htmlFor="">Last name:</label>
                <input type="text" name="lname" value={this.state.employees.lname} onChange={this.handleevent} />{""}
                <br /><label htmlFor="">Email:</label>
                <input type="text" name="email" value={this.state.employees.email} onChange={this.handleevent} />{""}
                <br /><label htmlFor="">Password:</label>
                <input type="text" name="password" value={this.state.employees.password} onChange={this.handleevent} />{""}
                <br />{this.state.inx === null ? <button type="button" class="btn btn-primary"style={{marginTop:"10px"}}  onClick={this.addemployee}>add employee</button> : <button type="button" class="btn btn-success" onClick={this.updateemployee}>update employee</button>}
            </form>
            <hr />
            <table border={2} class="container text-center">
                <thead><tr>
                    <th>fname</th>
                    <th>lname</th>
                    <th>email</th>
                    <th>password</th>
                    <th>id</th>
                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.props.employees.map((emp, i) => {
                        return <tr key={i}>
                            <td>{emp.fname}</td>
                            <td>{emp.lname}</td>
                            <td>{emp.email}</td>
                            <td>{emp.password}</td>
                            <td>{emp.id}</td>
                            <td><button type="button" class="btn btn-warning"  onClick={() => { this.editemployee(emp, i) }}>Edit</button></td>
                            <td><button type="button" class="btn btn-danger" onClick={() => { this.deleteemployee(emp) }}>Delete</button></td>
                        </tr>
                    })}


                </tbody>
            </table>


        </div>)
    }
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(Employeecrud)