//import { CgWebsite } from "react-icons/cg";
//import { BsGithub } from "react-icons/bs";

import './ProjectCard.css'

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <img className="project-card__img" src={props.imgPath} alt="card-img" />
      <div className="project-card__body">
        <h3 className="project-card__title">{props.title}</h3>
        <p className="project-card__text" style={{ textAlign: "justify" }}>
          {props.description}
        </p>
        <a className="button-primary" href={props.ghLink} target="_blank">
          {/*<BsGithub /> &nbsp; //Icone do github */}
          {props.isBlog ? "Blog" : "GitHub"}
        </a>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <a
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            {/* <CgWebsite /> &nbsp; //Icone da página  */}
            {"Demo"}
          </a>
        )}
      </div>
    </div>
  );
}
