import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { useTranslation } from 'react-i18next';

import "./Navigation.css";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

export default function Navigation({ logo }) {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <a href="#" className="logo">
          {logo}
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">{t('home')}</a>
          </li>
          <li>
            <a href="#skills">{t('skills')}</a>
          </li>
          <li>
            <a href="#projects">{t('projects')}</a>
          </li>
        </ul>
      </nav>
      <div className="social-container">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/thiago-thomas/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <a href="https://github.com/thiago-thomas" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </div>
        <DarkModeSwitch />
      </div>
    </>
  );
}
