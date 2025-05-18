import { Component } from "react";

export default class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0,
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(<>
        <h1>{this.state.count}</h1>
        <button type="button" onClick={this.increment}>increment</button>
        </>)
    }
}