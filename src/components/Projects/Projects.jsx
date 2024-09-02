import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import comp from "../../assets/imgs/comp.png";
import wce from "../../assets/imgs/wce.png";
import bakers from "../../assets/imgs/bakers.png";

import "./Projects.css";

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
      <p className="section-description">Here are the most recent examples of my work</p>
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={true}
        autoPlay={true}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="project-carousel"
      >
        <div className="project-item">
          <img src={comp} alt="Torvalds" />
        </div>
        <div className="project-item">
          <img src={wce} alt="Torvalds" />
        </div>
        <div className="project-item">
          <img src={bakers} alt="Torvalds" />
        </div>
      </Carousel>
    </section>
  );
}
