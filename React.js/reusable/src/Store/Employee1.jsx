import React,{ Component } from "react";
import { connect } from "react-redux";

class Employee1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: "",
            editindex: null,
        }
    }
    handlechange = (e) => {
        this.setState({ employees: e.target.value })

    }
    adduser=()=>{
        this.props.dispatch({
            type:"Create",
            payload:this.state.employees
        })
        this.setState({employees:""})

    }
    updateuser=()=>{
        this.props.dispatch({
            type:"Update",
            payload:{
                value:this.state.employees,
                index:this.state.editindex
            }
        })
        this.setState({employees:"",editindex:null})
    }
    edit=(emp,i)=>{
        this.setState({employees:emp,editindex:i})
    }
    delete=(emp)=>{
        this.props.dispatch({
            type:"Delete",
            payload:emp,
        })

    }


    render() {
        return (<div class="container text-center">
            <h1>employee details</h1>
            <input type="text" name="" value={this.state.employees} onChange={this.handlechange} />{""}
            {this.state.editindex === null ? <button type="button" class="btn btn-primary"onClick={ this.adduser } >Add employee</button> : <button type="button" onClick={ this.updateuser } >Update employee</button>}
            <table border={1} class="container text-center">
                <thead>
                    <tr><th>name</th>                      
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.employees.map((emp, i) => {
                        return (
                            <tr key={i}>
                                <td>{emp}</td>                              
                                <td><button type="button" class="btn btn-warning" onClick={() => this.edit(emp, i)}>Edit</button></td>
                                <td><button type="button" class="btn btn-danger" onClick={() => this.delete(emp)}>Delete</button></td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>)
    }

}
function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(Employee1)