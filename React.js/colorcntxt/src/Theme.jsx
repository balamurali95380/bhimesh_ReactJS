import React from 'react';
import { Usercontextprovider } from './Prvdr';
import Dark from './Dark';

export default class Theme extends Component {
  constructor(){
    super()
    this.state = {
      theme: 'light',
    };
  }


  toggleTheme = () => {
    this.setState(prev => ({
      theme: prev.theme === 'light' ? 'dark' : 'light',
    }));
  };

  render() {  

    return (<div>      
      <Usercontextprovider  value={this.state.theme} >
        <Dark toggleTheme={this.toggleTheme}
              
        />
      </Usercontextprovider>
      </div>
      
    );
  }
}


