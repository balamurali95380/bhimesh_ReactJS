import { Component } from "react";

export default class Shoulder extends Component{
  
    render() {
        return <div>
            <h1>{this.props.isOn}</h1>
            <button onClick={this.props.toggle}>{this.props.isOn ? 'Turn Off' : 'Turn On'}</button>
            <div >
            The light is <strong>{this.props.isOn ? 'OFF' : 'ON'}</strong>
            </div>
        </div>
    }
}

