import React from "react";

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  state = {
    user: { name: "Alice" },
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          user: this.state.user,
          login: () => this.setState({ user: { name: "Alice" } }),
          logout: () => this.setState({ user: null }),
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthContext, AuthProvider };
