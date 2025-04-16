import React,{ Component } from "react";
import { connect } from "react-redux";

class Employee extends Component{

      
    
    render(){
        return(<div>
            <h1>welcome to employee</h1>
            <ul>
            {this.props.employee.map((emp) => {
            return <li>{emp}</li>;
          })}
            </ul>
        </div>)}}
    
    

function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(Employee)
