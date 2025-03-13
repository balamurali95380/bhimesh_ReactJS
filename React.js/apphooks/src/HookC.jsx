import { Component } from "react";

export default class HookC extends Component{
    render(){
        return <div>
            <img src={"https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="" />
        </div>
    }
    componentWillUnmount(){
        console.log("component from C")
    }
}