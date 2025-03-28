import React, { Component } from "react";

const Main12 = (Click) => {

    class Require extends Component {
        constructor() {
            super()
            this.state = {
                count: 12,
            }
        }
        increment = () => {
            this.setState({ count: this.state.count + 5 })
        }
        decrement = () => {
            this.setState({ count: this.state.count - 5 })
        }
        reset = () => {
            this.setState({ count: 0 })
        }
        render() {
            return (<Click count={this.state.count}
                increment={this.increment}
                decrement={this.decrement}
                reset={this.reset} />
                )
        }

    }
    return Require;
}
export default Main12;
