import React, { Component } from 'react';
import ChildButton from './ChildButton';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Waiting for child action...'
    };
  }

  handleChildClick = () => {
    this.setState({ message: 'Child button clicked!' });
  };

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <ChildButton onButtonClick={this.handleChildClick} />
      </div>
    );
  }
}

export default Parent;
