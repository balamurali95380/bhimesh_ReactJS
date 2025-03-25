import { Component } from "react";
import Child2 from "./Child2";

export default class Child1 extends Component{
    render(){
        return(<div>
            <h1>welcome Child1</h1>
            <Child2 msg={this.props.msg}/>
        </div> )  
        
    }
}