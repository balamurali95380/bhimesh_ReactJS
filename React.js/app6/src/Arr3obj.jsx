import { Component } from "react";
import Arraydsp from "./Arraydsp";
import Keyar from "./Keyar";

export default class Arr3obj extends Component{
    constructor(){
        super()
        this.state={  
            person:["ram","123"] ,
            person1:  
            [
                {fname:"bhi",lname:"gfd"},{lname:"red",contact:1234},{contact:123,mail:"bhim@gmail.com",}
            ]        

        }      
        
    }
    changearray=()=>{
        this.setState({person:["BH","345"] ,
        person1:  
        [
            {fname:"Rav",lname:"b"},{lname:"gr",contact:95380},{contact:98,mail:"im@gmail.com",}
        ]     })   


    }
    render(){
        return <div>
           <ul>{this.state.person.map(function(val,i){
            return <li key={i}>{val}</li>})}</ul>
            <ul>{this.state.person1.map(function(val,i){
            return <li key={i}>{Object.values(val)}</li>})}</ul>
            <button onClick={this.changearray}>changearraydetails</button>

           {/* <Arraydsp all={this.state.person1}/> */}
           <Keyar all={this.state.person1}/>
        </div>
    }
}