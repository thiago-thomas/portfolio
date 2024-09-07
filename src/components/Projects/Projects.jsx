import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import comp from "../../assets/imgs/comp.png";
import wce from "../../assets/imgs/wce.png";
import bakers from "../../assets/imgs/bakers.png";

import "./Projects.css";

import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-description">
        Here are the most recent examples of my work
      </p>
      <div className="project-container">
        <div className="project-card">
          <ProjectCard
            imgPath={comp}
            isBlog={false}
            title="Company Comp"
            description="Some description text..."
            ghLink="#"
            demoLink="#"
          />
        </div>
        <div className="project-card">
          <ProjectCard
            imgPath={wce}
            isBlog={false}
            title="World Class Experience"
            description="Some description text..."
            ghLink="#"
            demoLink="#"
          />
        </div>
        <div className="project-card">
          <ProjectCard
            imgPath={bakers}
            isBlog={false}
            title="Bakers"
            description="Some description text..."
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
        </div>
      </div>
    </section>
  );
}
