import React from 'react';
import { Component } from 'react';



export default class Track extends Component{
    render(){
       return <>
        <h2>Move your mouse around!</h2>
        <p>
          The mouse position is: <strong>({this.props.x}, {this.props.y})</strong>
        </p>
      </>

    }
}
