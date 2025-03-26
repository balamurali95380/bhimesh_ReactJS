import React, { Component } from "react";
import Hoc1 from "./Hoc1";

 class Chdc1 extends Component{
    render(){
        return <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.increment}>increment</button>
        <button onClick={this.props.decrement}>decrement</button>
        <button onClick={this.props.reset}>reset</button>
    </div>
    }
}


export default Hoc1(Chdc1)