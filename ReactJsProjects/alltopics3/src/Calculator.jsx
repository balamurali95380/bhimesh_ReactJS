import React, { Component } from 'react';
import InputNumber from './InputNumber';
import Result from './Result';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  handleNumberChange = (value) => {
    this.setState({ number: value });
  };

  render() {
    return (
      <div>
        <h2>Square Calculator</h2>
        <InputNumber value={this.state.number} onNumberChange={this.handleNumberChange} />
        <Result number={this.state.number} />
      </div>
    );
  }
}

export default Calculator;
