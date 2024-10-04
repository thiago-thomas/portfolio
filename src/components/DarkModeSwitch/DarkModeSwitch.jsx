import "./DarkModeSwitch.css";

import { useState, useEffect } from "react";

export default function DarkModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div>
      <label id="switch" className="switch">
        <input type="checkbox" onChange={toggleTheme} id="slider" checked={!isDarkMode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}