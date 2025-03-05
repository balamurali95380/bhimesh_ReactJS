import { Component } from "react";
import Clc from "./Clc";

export default class Cls extends Component{
    constructor(){
        super()
        this.state={
            person:{
                fname:"bhi1"
            }
        }

    }
    render(){
        return <div>
            {/* <h2>{this.state.person.fname}</h2> */}
            <Clc all={this.state.person}/>
        </div>
    }
}