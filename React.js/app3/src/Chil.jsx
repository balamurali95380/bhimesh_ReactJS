import { Component } from "react"

export default class Chil extends Component{
    constructor(){
        super()
                
    }
    render(  ){
        console.log(this.props.all)
        return<div>
            <h2>{this.props.all.fname}</h2>           
        </div>
    }
}