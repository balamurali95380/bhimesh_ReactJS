import { Component } from "react";
import Chil from "./Chil";


export default class Pers extends Component{
    constructor(){
        super()
        this.state={
            fname:"bhi"
        }       
    }
    render(){
        return (<div>
            <Chil all={this.state}/>
        </div>)
    }
}

export class Newcla extends Component{
    render(){
        return <h2>Welcome from Chil Component </h2>
    }
}


    
