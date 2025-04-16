import React,{ Component } from "react";
import { connect } from "react-redux";

class User extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div>
            <h1>welcome to User</h1>
            <ul>
            {this.props.users.map((emp) => {
            return <li>{emp}</li>;
          })}
            </ul>
        </div>)
    }
    
}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(User)