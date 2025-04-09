import React from "react";

const ThemeContext = React.createContext();

class ThemeProvider extends React.Component {
  state = {
    theme: "light",
  };

  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === "light" ? "dark" : "light",
    }));
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeContext, ThemeProvider };
