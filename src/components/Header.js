import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";

const DARK_MODE_ELEMENTS = "#2b3945";
const DARK_MODE_BACKGROUND = "#202c37";
const DARK_MODE_TEXT = "#fff";

const LIGHT_MODE_TEXT = "#111517";
const LIGHT_MODE_INPUT = "#858585";
const LIGHT_MODE_BACKGROUND = "#fafafa";
const LIGHT_MODE_ELEMENTS = "#fff";

function Header() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const background = darkMode ? DARK_MODE_BACKGROUND : LIGHT_MODE_BACKGROUND;
    const text = darkMode ? DARK_MODE_TEXT : LIGHT_MODE_TEXT;
    const element = darkMode ? DARK_MODE_ELEMENTS : LIGHT_MODE_ELEMENTS;
    const inputText = darkMode ? DARK_MODE_TEXT : LIGHT_MODE_INPUT;
    document.documentElement.style.setProperty("--clr-background", background);
    document.documentElement.style.setProperty("--clr-text", text);
    document.documentElement.style.setProperty("--clr-element", element);
    document.documentElement.style.setProperty("--clr-input-text", inputText);
  }, [darkMode]);

  function changeMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  const icon = darkMode ? faSun : faMoon;
  const iconText = darkMode ? "Light Mode" : "Dark Mode";
  return (
    <header className="app-header">
      <h1 className="app-header__title">Where in the world?</h1>
      <div onClick={changeMode} className="app-header__change-mod">
        <FontAwesomeIcon icon={icon} className="app-header__change-icon" />
        {iconText}
      </div>
    </header>
  );
}

export default Header;
