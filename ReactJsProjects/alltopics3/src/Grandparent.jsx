import React, { Component } from 'react';
import Parent from './Parent';
import Parnt from './Parnt';

class Grandparent extends Component {
  render() {
    const theme = 'dark'; // You can change this to 'light' for testing
    return (
      <div>
        <h2>Grandparent Component</h2>
        <Parnt theme={theme} />
      </div>
    );
  }
}

export default Grandparent;
