import { Component } from "react";
import Child1 from "./Child1";
import { Userprovider } from "./Contextfl";


export default class Parent1 extends Component{
    constructor(){
        super()
        this.state={
            msg:"Parent1 component",
            info:"context msg info",
        }

    }
    render(){
        return (<div>
            <h1>this is parent</h1>
            <Userprovider value={this.state.info}>
            <Child1 msg={this.state.msg}/>
            </Userprovider> 
    
        </div> ) 
    
            
        
    }
  

}