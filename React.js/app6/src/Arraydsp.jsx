import { Component } from "react";

export default class Arraydsp extends Component{
    render(){
        return <div>
            <ul>
                {this.props.all.map(function(val,i){
                    return <li key={i}>{Object.keys(val)[0]}:{Object.values(val)[0]}
                    {Object.keys(val)[1]}:{Object.values(val)[1]}
                    </li>                    
                })}
            </ul>
        </div>
    }
}


 