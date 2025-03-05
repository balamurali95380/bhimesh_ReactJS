import { Component } from "react";

export default class Arr3obj extends Component{
    constructor(){
        super()
        this.state={  
            person:["ram","123"] ,
            person1:  
            [
                {fname:"bhi",lname:"gfd"},{lname:"red"},{contact:123}
            ]        

        }      
        
    }
    render(){
        return <div>
           <ul>{this.state.person.map(function(val,i){
            return <li key={i}>{val}</li>})}</ul>
            <ul>{this.state.person1.map(function(val,i){
            return <li key={i}>{Object.values(val)}</li>})}</ul>
            {/* return <li key={i}>{Object.keys(val)[0]}: {Object.values(val)[0]}</li>
            li key={i}>{Object.keys(val)[0]}: {Object.values(val)[0]}</li>
            li key={i}>{Object.keys(val)[0]}: {Object.values(val)[0]}</li>})}</ul> */}
        </div>
    }
}