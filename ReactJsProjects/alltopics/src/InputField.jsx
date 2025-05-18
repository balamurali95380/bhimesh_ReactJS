import { Component } from "react";

export default class InputField extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder=""
        />
        <p>inputvalue: {this.state.inputValue}</p>
      </div>
    );
  }
}

