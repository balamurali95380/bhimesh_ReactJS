import { Component } from "react";
import Child3 from "./Child3";

export default class extends Component{
    render(){
        return (
        <div><h1>welcome Child2</h1>
            <Child3 msg={this.props.msg}/></div>)
    }
}