import React, { Component } from "react";
import { connect} from "react-redux";
import { adduser, deleteuser, updateuser } from "./Userslice";


class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                fname: "",
                lname: "",
                email: "",
                password: ""
            },

            editindex: null,
        }
    }
    handleevent = (e) => {
        const newuser = { ...this.state.user }
        newuser[e.target.name] = e.target.value
        this.setState({ user: newuser })

    }
    adduser = () => {
        this.props.dispatch(adduser(this.state.user))
        this.setState({
            user: {
                fname: "",
                lname: "",
                email: "",
                password: ""
            }
        })
    }
    edituser = (user, i) => {
        this.setState({ user, editindex: i })
    }
    updateuser = () => {
        this.props.dispatch(updateuser({
            
                value: this.state.user, index: this.state.editindex
            
        }))
        this.setState({
            user: {
                fname: "",
                lname: "",
                email: "",
                password: ""
            },
            editindex: null
        })
    }
    deleteuser = (user) => {
        this.props.dispatch(deleteuser(user))
    }

    render() {
        return (<div class="container text-center">
            <form action="">
                <label htmlFor="">First name:</label>
                <input type="text" name="fname" value={this.state.user.fname} onChange={this.handleevent} />{""}
                <br /><label htmlFor="">Last name:</label>
                <input type="text" name="lname" value={this.state.user.lname} onChange={this.handleevent} />{""}
                <br /><label htmlFor="">Email:</label>
                <input type="text" name="email" value={this.state.user.email} onChange={this.handleevent} />{""}
                <br /><label htmlFor="">Password:</label>
                <input type="text" name="password" value={this.state.user.password} onChange={this.handleevent} />{""}
                <br />{this.state.editindex === null ? <button type="button" class="btn btn-primary" style={{ marginTop: "10px" }} onClick={this.adduser}>add user</button> : <button type="button" class="btn btn-success" onClick={this.updateuser}>update user</button>}
            </form>
            <hr />
            <table border={2} class="container text-center">
                <thead><tr>
                    <th>fname</th>
                    <th>lname</th>
                    <th>email</th>
                    <th>password</th>

                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.props.user.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>

                            <td><button type="button" class="btn btn-warning" onClick={() => { this.edituser(user, i) }}>Edit</button></td>
                            <td><button type="button" class="btn btn-danger" onClick={() => { this.deleteuser(user) }}>Delete</button></td>
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
export default connect(mapStateToProps)(User)