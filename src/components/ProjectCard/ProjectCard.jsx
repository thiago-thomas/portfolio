import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";

import "./ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <img className="project-card__img" src={props.imgPath} alt="card-img" />
      <div className="project-card__body">
        <div className="project-card__header">
          <h3 className="project-card__title">{props.title}</h3>
          <p className="project-card__text">{props.description}</p>
        </div>
        <div className="project-card-tags">
          {props.tags?.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
        <div className="project-card-link">
          <a
            className="project-card-link__anchor"
            href={props.ghLink}
            target="_blank"
          >
            <FontAwesomeIcon
              className="project-card-link__icon"
              icon={faGithub}
            />
            {"GitHub"}
          </a>
          {props.demoLink && (
            <a
              className="project-card-link__anchor"
              href={props.demoLink}
              target="_blank"
            >
              <FontAwesomeIcon
                className="project-card-link__icon"
                icon={faWindowMaximize}
              />
              {"Demo"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
