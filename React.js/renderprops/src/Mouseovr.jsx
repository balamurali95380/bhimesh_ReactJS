import { Component } from "react";

export default  class Mouseovr extends Component{
    render(){
        return(<div>
           
            <h1>{this.props.count}</h1>
            <button onMouseOver={this.props.increment}>increment</button>
            <button onMouseOver={this.props.decrement}>decrement</button>
            <button onMouseOver={this.props.reset}>reset</button>
        </div>)
    }
}