import { Component } from "react";

export default class Clc extends Component{
    changename=()=>{
        this.props.all.fname="kal"    }
    render(){
        return <div>
            <h2>{this.props.all.fname}</h2>
            <button onClick={this.changename}>change fname</button>
        </div>
    }
}