import React, { Component } from "react";
import Hoc1 from "./Hoc2";

 class Reuse extends Component{
    render(){
        return <div>
        <h1>{this.props.count}</h1>
        <button onMouseOver={this.props.increment}>increment</button>
        <button onMouseOver={this.props.decrement}>decrement</button>
        <button onMouseOver={this.props.reset}>reset</button>
    </div>
    }
}

export default Hoc2(Reuse)