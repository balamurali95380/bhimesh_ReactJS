import { Component } from "react"


export default class Intfc extends Component{
    constructor(){
        super()
        this.state={
            count:12,
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+5})
    }
    decrement=()=>{
        this.setState({count:this.state.count-5})
    }
    reset=()=>{
        this.setState({count:0})
    }
    render(){
        return this.props.render(this.state.count,this.increment,this.decrement,this.reset)
    }
}