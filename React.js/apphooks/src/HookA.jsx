import { Component } from "react";
import HookB from "./HookB";
import HookC from "./HookC";

export default class HookA extends Component{
    constructor(props){
        super()
        this.state={
            contact:123,
        }
        console.log("iam from constructor hook A");
    }
    changecnt=()=>{
        this.setState({contact:this.state.contact+1})
    }
    render(){
        console.log("iam from render hook A");
        return <div><h2>iam from render hook A</h2>  
        <button type="button" onClick={this.changecnt}>changecnt</button>
        <HookB cnt={this.state.contact}/>   
        {this.state.contact==125&& <HookC/>}  
        </div>        
    }
    componentDidMount(){
        console.log("iam from componentdid mount hook A");
    }
static getDerivedStateFromProps(props,state){
    console.log("iam from getderived hook A"); 
    return null
}

}