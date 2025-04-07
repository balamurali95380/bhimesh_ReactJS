import { Component } from "react"

export default class Text extends Component{
    render(){        
   return  <div className="text-center text-xl font-semibold">
    <strong>Current Count: {this.props.count}</strong>
  </div>

    }
}


 
