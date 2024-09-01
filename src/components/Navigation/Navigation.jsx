import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Navigation.css";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

export default function Navigation({ logo }) {
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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
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
        {/* <button className="btn-primary">Contact</button> */}
      </div>
    </>
  );
}
