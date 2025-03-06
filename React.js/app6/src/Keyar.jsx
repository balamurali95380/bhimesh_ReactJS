import { Component } from "react";

export default class Keyar extends Component{
    render(){
        return <div>
            <ul>
                {this.props.all.map(function(val,i){
                    return (
                        <li key={i}>
                          {Object.entries(val).map(([key, value]) => (
                            <span key={key}>
                              {key}: {value}{" "}
                            </span>
                          ))}
                        </li>
                      );

                })}
            </ul>
        </div>
    }
}
