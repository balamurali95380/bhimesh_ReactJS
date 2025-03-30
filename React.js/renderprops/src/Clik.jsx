import { Component } from "react";

export default  class Clik extends Component{
    render(){
        return(<div>
            <h1>{this.props.count}</h1>
            <button onClick={this.props.increment}>increment</button>
            <button onClick={this.props.decrement}>decrement</button>
            <button onClick={this.props.reset}>reset</button>
        </div>)
    }
}