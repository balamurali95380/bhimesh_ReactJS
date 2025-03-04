import { Component } from "react";

export default class Cla extends Component{
    constructor(){
        super()
        this.state={
            // person:
            // {
              fname:"bhi",
              contact:1234
            // }
        }

    }
    changename=()=>{
        // this.state.person.fname="ram"
        this.setState({fname:"ram",contact:2345})
    }
    render(){
        return <div>
            <button onClick={this.changename}>changefname</button>

            <h1>{this.state.fname}</h1>
            
            {this.state.contact}            
        </div>
    }
}

