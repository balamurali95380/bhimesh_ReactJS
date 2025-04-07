import React, { Component } from "react";
import HOC2 from "./Hoc2";

class Dataload extends Component {
  render() {
    return <div><h1>{this.props.data}</h1>
    <h1>{this.props.Loading}</h1>
      <button type="button" onClick={this.props.load}>load</button></div>;

  }
}
export default HOC2(Dataload)





