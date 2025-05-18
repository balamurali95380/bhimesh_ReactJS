import { Component } from "react";
import Greetprop from "./Greetprop";

export default class Greeting extends Component{
    constructor(){
        super()
        this.state={
            name:"bhimesh",
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(<>
        <h1>{this.state.name}</h1>
        <Greetprop all={this.state}/>

        </>)
    }
}