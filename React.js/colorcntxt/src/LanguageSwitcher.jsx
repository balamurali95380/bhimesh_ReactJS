// LanguageSwitcher.jsx
import React from "react";
import { LanguageContext } from "./LanguageContext";

class LanguageSwitcher extends React.Component {
  static contextType = LanguageContext;

  render() {
    const { language, setLanguage } = this.context;

    return (
      <div style={{ marginTop: "1rem" }}>
        <label>Select Language: </label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
      </div>
    );
  }
}

export default LanguageSwitcher;
