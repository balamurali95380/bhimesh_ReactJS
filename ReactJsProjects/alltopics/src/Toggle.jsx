import { Component } from "react";


export default class Toggle extends Component {
    constructor() {
        super()
        this.state = {
            isOn: true
        }

    }


    handleToggle = () => {
        this.setState({
            isOn: !this.state.isOn
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.isOn ? 'ON' : 'OFF'}</h2>
                <button onClick={this.handleToggle}>Toggle</button>
            </div>
        );
    }
}


