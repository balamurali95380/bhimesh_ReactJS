import { Component } from "react";

export default class Arych extends Component{
    render(){
       return <div>
            <ul>
                { this.props.all.map(function(ar){
                    return <li>{ar}</li>})}
            </ul>
        </div>
    }
    }
