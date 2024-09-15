import reactflix from "../../assets/imgs/reactflix.png";
import wce from "../../assets/imgs/wce.png";
import bakers from "../../assets/imgs/bakers.png";
import burgers from "../../assets/imgs/burgers.png";
import mustache from "../../assets/imgs/mustache.png";
import salon from "../../assets/imgs/salon.png";

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
          imgPath={reactflix}
          title="ReactFlix"
          description="a React project, in which you can view the films that are being released and make a list of your favorite films, using a Movie API"
          ghLink="https://github.com/thiago-thomas/react-flix"
          demoLink="https://reactflix-thiago-thomas.netlify.app/listafilmes"
        />
        <ProjectCard
          imgPath={bakers}
          title="Bakers"
          description="An example of a page for a bakery"
          ghLink="https://github.com/thiago-thomas/projects/tree/main/bakers"
          demoLink="https://thiago-thomas.github.io/projects/bakers/"
        />
        <ProjectCard
          imgPath={wce}
          title="World Class Experience"
          description="An example of a page for a master class experience"
          ghLink="https://github.com/thiago-thomas/projects/tree/main/wce"
          demoLink="https://thiago-thomas.github.io/projects/wce/"
        />
        <ProjectCard
          imgPath={burgers}
          title="Burger's"
          description="An example of a page for a burger joint"
          ghLink="https://github.com/thiago-thomas/projects-bootstrap/tree/master/Burger's"
          demoLink=""
        />
        <ProjectCard
          imgPath={mustache}
          title="Mustache's"
          description="An example of a page for a barber shop"
          ghLink="https://github.com/thiago-thomas/projects-bootstrap/tree/master/Mustache's"
          demoLink=""
        />
        <ProjectCard
          imgPath={salon}
          title="Salon's"
          description="An example of a page for a beauty salon"
          ghLink="https://github.com/thiago-thomas/projects-bootstrap/tree/master/Salon's"
          demoLink=""
        />
      </div>
    </section>
  );
}
