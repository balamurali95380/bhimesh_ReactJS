// ProfileCard.jsx
import React from "react";

import { ThemeContext } from "./ThemeContext";
import { LanguageContext } from "./LanguageContext";
import { AuthContext } from "./Authcontext";

class ProfileCard extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(auth) => (
          <ThemeContext.Consumer>
            {(theme) => (
              <LanguageContext.Consumer>
                {(lang) => (
                  <div
                    style={{
                      backgroundColor:
                        theme.theme === "dark" ? "#333" : "#eee",
                      color: theme.theme === "dark" ? "#fff" : "#000",
                      padding: "1rem",
                      borderRadius: "8px",
                      marginTop: "1rem",
                    }}
                  >
                    <h2>
                      {lang.t.welcome},{" "}
                      {auth.user ? auth.user.name : "Guest"}
                    </h2>
                    <button onClick={auth.logout}>
                      {lang.t.logout}
                    </button>
                    <br />
                    <button
                      onClick={theme.toggleTheme}
                      style={{ marginTop: "0.5rem" }}
                    >
                      Toggle Theme
                    </button>
                  </div>
                )}
              </LanguageContext.Consumer>
            )}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default ProfileCard;
