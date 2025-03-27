import { Component } from "react";
import { Userconsumer } from "./Cntapi";

export default class Chi3 extends Component {
    constructor() {
        super()
    }
    render() {
        return (<div><h2>from Chi3</h2>
            <h1>{this.props.msg1}</h1>
            < Userconsumer>
                {(value) => {
                    return <h1>{value}</h1>
                }}
            </Userconsumer>
        </div>)
    }
}