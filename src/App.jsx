import "./App.css";

import Navigation from "./components/Navigation/Navigation.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";

export default function App() {
  const name = "Thiago Thomas";
  const role = "Front-End Developer";
  const github = "thiago-thomas";

  return (
    <>
      <header>
        <Navigation logo={name} />
      </header>
      <main>
        <Banner name={name} role={role} github={github} />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
