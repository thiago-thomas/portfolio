import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faGitAlt,
  faGithub,
  faReact,
  faSass,
  faNode,
  faNpm,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

import reduxImg from '../../assets/imgs/icons8-redux.svg'

import typeScriptImg from '../../assets/imgs/icons8-typescript.svg'

import { useTranslation } from 'react-i18next';

import "./Skills.css";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills">
      <h2 className="section-title">{t('skills')}</h2>
      <p className="section-description">{t('skills-desc')}</p>
      <div className="skills-card-container">
        <div className="skills-card">
          <FontAwesomeIcon
            className="skill-card__image"
            icon={faReact}
            size="xl"
          />
          <h3 className="skill-card__text">React</h3>
        </div>
        <div className="skills-card">
          <img src={reduxImg} alt="Redux" className="skill-card__image" />
          <h3 className="skill-card__text">Redux</h3>
        </div>
        <div className="skills-card">
          <img src={typeScriptImg} alt="Typescript logo" className="skill-card__image" />
          <h3 className="skill-card__text">TypeScript</h3>
        </div>
        <div className="skills-card">
          <FontAwesomeIcon
            className="skill-card__image"
            icon={faSass}
            size="xl"
          />
          <h3 className="skill-card__text">SASS</h3>
        </div>
        <div className="skills-card">
          <FontAwesomeIcon
            className="skill-card__image"
            icon={faNpm}
            size="xl"
          />
          <h3 className="skill-card__text">NPM</h3>
        </div>
        <div className="skills-card">
          <FontAwesomeIcon
            className="skill-card__image"
            icon={faGitAlt}
            size="xl"
          />
          <h3 className="skill-card__text">Git</h3>
        </div>
        <div className="skills-card">
          <FontAwesomeIcon
            className="skill-card__image"
            icon={faGithub}
            size="xl"
          />
          <h3 className="skill-card__text">Github</h3>
        </div>

        <div className="skills-card">
          <FontAwesomeIcon
            className="skill-card__image"
            icon={faHtml5}
            size="xl"
          />
          <h3 className="skill-card__text">HTML</h3>
        </div>
        <div className="skills-card">
          <FontAwesomeIcon
            className="skill-card__image"
            icon={faCss3}
            size="xl"
          />
          <h3 className="skill-card__text">CSS</h3>
        </div>
        <div className="skills-card">
          <FontAwesomeIcon
            className="skill-card__image"
            icon={faJs}
            size="xl"
          />
          <h3 className="skill-card__text">JS</h3>
        </div>
        <div className="skills-card">
          <FontAwesomeIcon
            className="skill-card__image"
            icon={faNode}
            size="xl"
          />
          <h3 className="skill-card__text">Node</h3>
        </div>
        <div className="skills-card">
          <FontAwesomeIcon
            className="skill-card__image"
            icon={faJava}
            size="xl"
          />
          <h3 className="skill-card__text">Java</h3>
        </div>
      </div>
    </section>
  );
}
