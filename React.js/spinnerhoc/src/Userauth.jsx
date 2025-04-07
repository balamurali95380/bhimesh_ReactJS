
import React from "react";
import Hoc2 from "./Hoc2";

class Userauth extends React.Component {
  render() {
    return <h2>Welcome to the Dashboard!</h2>;
  }
}

const ProtectedUserauth= Hoc2(Userauth);

const App = () => {
  const isAuthenticated = false; // Change to true to see the component

  return <ProtectedUserauth isAuthenticated={isAuthenticated} />;
};

export default App;

