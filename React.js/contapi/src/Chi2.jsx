import { Component } from "react";

import Chi3 from "./Chi3";

export default class Chi2 extends Component{
    render(){
        return (<div><h2>from Chi2</h2>
             <h1> <Chi3 msg1={this.props.msg1}/></h1></div>) 
            

        
        


    }
}