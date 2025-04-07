// App.jsx
import React from "react";

import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext";

import LanguageSwitcher from "./LanguageSwitcher";
import ProfileCard from "./Profilecard";
import { AuthProvider } from "./Authcontext";

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <ThemeProvider>
          <LanguageProvider>
            <div style={{ padding: "2rem" }}>
              <h1>🌍 Multi-Context Demo</h1>
              <LanguageSwitcher />
              <ProfileCard />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </AuthProvider>
    );
  }
}

export default App;
