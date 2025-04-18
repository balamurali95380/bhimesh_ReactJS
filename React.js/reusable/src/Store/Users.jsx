import React,{ Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: "",
            editindex: null,
        }
    }
    handlechange = (e) => {
        this.setState({ users: e.target.value })

    }
    adduser=()=>{
        this.props.dispatch({
            type:"Create",
            payload:this.state.users
        })
        this.setState({users:""})

    }
    updateuser=()=>{
        this.props.dispatch({
            type:"Update",
            payload:{
                value:this.state.users,
                index:this.state.editindex
            }
        })
        this.setState({users:"",editindex:null})
    }
    edit=(usr,i)=>{
        this.setState({users:usr,editindex:i})
    }
    delete=(usr)=>{
        this.props.dispatch({
            type:"Delete",
            payload:usr,
        })

    }


    render() {
        return (<div class="container text-center">
            <h1>User details</h1>
            <input type="text" name="" value={this.state.users} onChange={this.handlechange} />{""}
            {this.state.editindex === null ? <button type="button" onClick={ this.adduser } >Add user</button> : <button type="button" onClick={ this.updateuser } >Update user</button>}
            <ul>
                {this.props.users.map((usr, i) => {
                    return <li key={i} >{usr} <button type="button" class="btn btn-danger"  onClick={()=>{this.delete(usr)}}>delete</button> <button type="button"  class="btn btn-warning" onClick={()=>{this.edit(usr,i)}}>edit</button></li>
                })}
            </ul>
        </div>)
    }

}
function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(Users)