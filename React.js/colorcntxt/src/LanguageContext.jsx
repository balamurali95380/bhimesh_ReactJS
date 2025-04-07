// LanguageContext.js
import React from "react";

const LanguageContext = React.createContext();

class LanguageProvider extends React.Component {
  state = {
    language: "en",
    translations: {
      en: { welcome: "Welcome", logout: "Logout" },
      es: { welcome: "Bienvenido", logout: "Cerrar sesión" },
      fr: { welcome: "Bienvenue", logout: "Déconnexion" },
    },
  };

  setLanguage = (language) => {
    this.setState({ language });
  };

  render() {
    const { children } = this.props;
    const { language, translations } = this.state;

    return (
      <LanguageContext.Provider
        value={{
          language,
          setLanguage: this.setLanguage,
          t: translations[language],
        }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }
}

export { LanguageContext, LanguageProvider };
