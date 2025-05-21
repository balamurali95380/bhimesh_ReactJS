import React, { Component } from 'react';

class ButtonPanel extends Component {
  handleClick = () => {
    this.props.onNotifyParent("Button clicked from ButtonPanel!");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Notify Dashboard</button>
      </div>
    );
  }
}

export default ButtonPanel
