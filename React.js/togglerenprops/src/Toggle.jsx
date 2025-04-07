import React, { Component } from 'react';
export default class Toggle extends Component {
    constructor() {
        super()
        this.state = {
            isOn: false,
        }
    }
    toggle = () => {
        this.setState(prevState => ({ isOn: !prevState.isOn }));
    };


    render() {
        return <div>
            {this.props.render(this.state.isOn, this.toggle)}
        </div>
    }
}
