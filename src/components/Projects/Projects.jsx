import comp from "../../assets/imgs/comp.png";
import wce from "../../assets/imgs/wce.png";
import bakers from "../../assets/imgs/bakers.png";

import "./Projects.css";

import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-description">
        Here are the most recent examples of my work
      </p>
      <div className="project-container">
        <ProjectCard
          imgPath={comp}
          title="Company Comp"
          description="Some description text..."
          ghLink="#"
          demoLink="#"
        />
        <ProjectCard
          imgPath={wce}
          title="World Class Experience"
          description="Some description text..."
          ghLink="#"
          demoLink="#"
        />
        <ProjectCard
          imgPath={bakers}
          title="Bakers"
          description="Some description text..."
          ghLink="#"
          demoLink="#"
        />
      </div>
    </section>
  );
}
