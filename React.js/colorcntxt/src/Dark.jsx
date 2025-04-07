import { Component } from "react";
import { Userconsumer } from "./Prvdr";


export default class Dark extends Component {
    constructor() {
        super()
    }
    render() {
     
        return (
        
        <div style={{ padding: '2rem',
            margin: '2rem',
            textAlign: 'center',
            backgroundColor: (this.props.theme === 'dark' )? 'white' : 'black',
            // color: isDark ? 'white' : 'black',
            borderRadius: '8px',
            transition: 'all 2s ease',}}>
                
             <h2>{this.props.value}</h2>
          
       < Userconsumer>
                       {(value) => {
                           return <div>
                            <h1>{value}</h1>
                            <button  onClick={this.props.toggleTheme}>themechange</button>
                           </div>
                       }}
                   </Userconsumer>
                    </div>)
    }
}