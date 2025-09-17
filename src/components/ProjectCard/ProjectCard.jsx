import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";

import "./ProjectCard.css";

export default function ProjectCard(props) {
  const {
    imgPath,
    title,
    description,
    tags,
    ghLink,
    demoLink,
    variant = "default", // Added variant prop with default value
  } = props;

  return (
    <div className={`project-card project-card--${variant}`}>
      <img className="project-card__img" src={imgPath} alt="card-img" />
      <div className="project-card__body">
        <div className="project-card__header">
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__text">{description}</p>
        </div>
        <div className="project-card-tags">
          {tags?.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
        <div className="project-card-link">
          <a
            className="project-card-link__anchor"
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer" // Added rel for security best practice
          >
            <FontAwesomeIcon
              className="project-card-link__icon"
              icon={faGithub}
            />
            {"GitHub"}
          </a>
          {demoLink && (
            <a
              className="project-card-link__anchor"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer" // Added rel for security best practice
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

