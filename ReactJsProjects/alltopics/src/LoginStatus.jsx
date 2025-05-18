import { Component } from "react";


export default class LoginStatus extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  toggleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        <h2>{isLoggedIn ? 'Welcome back!' : 'Please log in'}</h2>
        <button onClick={this.toggleLogin}>
          {isLoggedIn ? 'Log out' : 'Log in'}
        </button>
      </div>
    );
  }
}


