import React, { Component } from 'react';

export default class Mousepos extends Component {
    constructor() {
        super()
        this.state = {
            x: 0,
            y: 0,
        }
    };

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX, 
            // Horizontal position (in pixels) from the left edge of the viewport
            y: event.clientY,
            // Vertical position (in pixels) from the top edge of the viewport.
        });
    };

    render() {
        return (
            <div style={{ width:'750px',height: '100vh', border: '1px solid blue' }} onMouseMove={this.handleMouseMove}
            >

                {this.props.render(this.state.x, this.state.y)}

            </div>
        );
    }
}
