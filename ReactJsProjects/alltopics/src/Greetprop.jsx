import { Component } from "react";

export default class Greetprop extends Component{  
  
    render(){
        return(<>
        <p>"Hello, {this.props.all.name}!"</p>       
        </>)
    }
}