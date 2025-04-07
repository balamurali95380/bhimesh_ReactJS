import React from "react";
import Hoc2 from "./Hoc2";
import { Component } from "react";

class Wrappedprops extends Component {
  render() {
    return <div>Hello, {this.props.name}!</div>;
  }
}

export default Hoc2(Wrappedprops);
