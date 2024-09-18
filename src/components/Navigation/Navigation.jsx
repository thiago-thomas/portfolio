import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

import "./Navigation.css";

export default function Navigation({ logo }) {
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#" className="logo">
            {logo}
          </a>
          <button className="hamburger" onClick={toggleMenu}>
            {/* Ícone de menu hamburguer */}
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
        <div className={`nav-menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a onClick={toggleMenu} href="#home">
                {t("home")}
              </a>
            </li>
            <li>
              <a onClick={toggleMenu} href="#skills">
                {t("skills")}
              </a>
            </li>
            <li>
              <a onClick={toggleMenu} href="#projects">
                {t("projects")}
              </a>
            </li>
          </ul>
          <div className="social-container">
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/thiago-thomas/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
              <a href="https://github.com/thiago-thomas" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </div>
            <DarkModeSwitch />
          </div>
          <div className="language-container">
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("pt")}>Português</button>
          </div>
        </div>
      </nav>
    </>
  );
}
