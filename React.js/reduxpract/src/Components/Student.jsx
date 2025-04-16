import React,{ Component } from "react";
import { connect } from "react-redux";

class Student extends Component{
    constructor(props){
        super(props)
        this.state
    }
    render(){
        return(<div>
            <h1>welcome to Student</h1>
            <ul>
            {this.props.students.map((emp) => {
            return <li>{emp}</li>;
          })}
            </ul>
        </div>)
    }
    
}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(Student)