import { Component } from "react";

export default class UserCard extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(<>
            <h1>{this.props.name}</h1>
            <h1>role:{this.props.role}</h1>
        </>)
    }
}
UserCard.defaultProps = {
  role: 'Guest'
};