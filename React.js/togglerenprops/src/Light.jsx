import React,{ Component } from "react";

export default class Light extends Component{
  
    render() {
        return <div> 
            <button onMouseOver={this.props.toggle}>{this.props.isOn ? 'Turn Off' : 'Turn On'}</button>
            
              The light is <strong>{this.props.isOn ? 'OFF' : 'ON'}</strong>
            
        </div>
    }
}



