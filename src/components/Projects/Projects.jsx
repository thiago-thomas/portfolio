import reactflix from "../../assets/imgs/reactflix.png";
import wce from "../../assets/imgs/wce.png";
import bakers from "../../assets/imgs/bakers.png";
import burgers from "../../assets/imgs/burgers.png";
import mustache from "../../assets/imgs/mustache.png";
import salon from "../../assets/imgs/salon.png";
import scl from "../../assets/imgs/simple-coffee-listing.jpeg";

import { useTranslation } from 'react-i18next';

import "./Projects.css";

import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects">
      <h2 className="section-title">{t('projects')}</h2>
      <p className="section-description">
        {t('projects-desc')}
      </p>
      <div className="project-container">
        <ProjectCard
          imgPath={scl}
          title="Simple Coffee Listing"
          description={t('scl-desc')}
          ghLink="https://github.com/thiago-thomas/simple-coffee-listing"
          demoLink="https://simple-coffee-listing-thiago-thomas.netlify.app"
          tags={[t('responsible'),"react","coffee api","typescript","tailwind","css","html"]}
          variant="featured" // Example of using the variant prop
        />
        <ProjectCard
          imgPath={reactflix}
          title="ReactFlix"
          description={t('rf-desc')}
          ghLink="https://github.com/thiago-thomas/react-flix"
          demoLink="https://reactflix-thiago-thomas.netlify.app/listafilmes"
          tags={[t('responsible'),"react","movie db api","javascript","css", "html"]}
          variant="featured" // Example of using the variant prop
        />
        <ProjectCard
          imgPath={bakers}
          title="Bakers"
          description={t('bk-desc')}
          ghLink="https://github.com/thiago-thomas/projects/tree/main/bakers"
          demoLink="https://thiago-thomas.github.io/projects/bakers/"
          tags={[t('responsible'),"javascript","css", "html"]}
          variant="featured" // Example of using the variant prop
        />
        <ProjectCard
          imgPath={wce}
          title="World Class Experience"
          description={t('wce-desc')}
          ghLink="https://github.com/thiago-thomas/projects/tree/main/wce"
          demoLink="https://thiago-thomas.github.io/projects/wce/"
          tags={[t('responsible'),"javascript","css", "html"]}
          variant="featured" // Example of using the variant prop
        />
        <ProjectCard
          imgPath={burgers}
          title="Burger's"
          description={t('brg-desc')}
          ghLink="https://github.com/thiago-thomas/projects-bootstrap/tree/master/Burger's"
          demoLink=""
          tags={[t('responsible'),"bootstrap","javascript","css", "html"]}
          variant="featured" // Example of using the variant prop
        />
        <ProjectCard
          imgPath={mustache}
          title="Mustache's"
          description={t('mtc-desc')}
          ghLink="https://github.com/thiago-thomas/projects-bootstrap/tree/master/Mustache's"
          demoLink=""
          tags={[t('responsible'),"bootstrap","javascript","css", "html"]}
          variant="featured" // Example of using the variant prop
        />
        <ProjectCard
          imgPath={salon}
          title="Salon's"
          description={t('sln-desc')}
          ghLink="https://github.com/thiago-thomas/projects-bootstrap/tree/master/Salon's"
          demoLink=""
          tags={[t('responsible'),"bootstrap","javascript","css", "html"]}
          variant="featured" // Example of using the variant prop
        />
      </div>
    </section>
  );
}
