import { Component } from "react"
import React from "react";

const Hoc1=(Chdc1)=>{

     class Newss extends Component{
        constructor(props) {
            super(props);
      
            this.state = {
              count: 0,
            };
          }
          increment = () => {
            this.setState({ count: this.state.count + 1 });
          };
          decrement = () => {
            this.setState({ count: this.state.count - 1 });
          };
          reset = () => {
            this.setState({ count: 0 });
          };
          render(){
            return (
                <Chdc1
                  count={this.state.count}
                  increment={this.increment}
                  decrement={this.decrement}
                  reset={this.reset}
                />
              );
          }

     }
  return Newss;

};
export default Hoc1;

 