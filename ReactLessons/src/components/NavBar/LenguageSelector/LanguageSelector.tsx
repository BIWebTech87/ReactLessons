import React from "react";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState("en");

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <div className="language-selector">
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="en">En</option>
        <option value="pt">Pt</option>
        <option value="ru">Ru</option>
        <option value="ro">Ro</option>
      </select>
    </div>
  );
}

export default LanguageSelector;