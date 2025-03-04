import { Component } from "react";
import Arych from "./Arych";

export default class Objar extends Component{
    constructor(){
        super()
        this.state={
            person:{
                fname:"bhi",
                contact:12,
            },
            bhim:["ram",123],
        }
    }
    objectdets=()=>{
        this.setState({
            person:{
                fname:"ram",
                contact:24,
            }
        }

        )
    }
    render(){
        return <div>
           {/* <h2>{ this.state.person.fname}</h2> */}
           {/* { this.state.person.fname} 
           <hr />
           { this.state.person.contact}  */}
           <ul>
            <li>{ this.state.person.fname}</li>
            <li> { this.state.person.contact}</li>
           </ul>
           <button onClick={this.objectdets}>changeobjectdetails</button>

           <Arych all={this.state.bhim}/>
        </div>

    }
}