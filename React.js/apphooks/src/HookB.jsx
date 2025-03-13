import { Component } from "react";

export default class HookB extends Component {
    constructor(props) {
        super()
        this.state = {}
        console.log("LifeCycleB constructor");
    }
    render() {
        console.log("this is from render B")
        return <div>
            <h2> render B</h2>
            <h1>{this.props.cnt}</h1>
        </div>
    }
    static getDerivedStateFromProps() {
        console.log("this is from getderived  B")
        return {};

    }
    shouldComponentUpdate() {
        console.log("this is from sholud  B")
        return true
     }
    getSnapshotBeforeUpdate() {
        console.log("this is from snopshot  B")
        return true
    }
    componentDidUpdate() {
        console.log("this is from component did B")
    }



}