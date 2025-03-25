import { Component } from "react";
import { Userconsumer } from "./Contextfl";

export default class Child3 extends Component{
    constructor(){
        super()
    }
    render(){
        return(<div><h1>welcome Child3</h1>
        <h1>{this.props.msg}</h1>
       < Userconsumer>
       {(value)=>{
        return <h1>{value}</h1>
       }}
       </Userconsumer>
         </div>)
            
    }
}