import Navigation from "./components/Navigation/Navigation.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import { useTranslation } from 'react-i18next';
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";

export default function App() {
  const { t } = useTranslation();

  const name = "Thiago Thomas";
  const github = "thiago-thomas";
  const linkedin = github;

  return (
    <>
      <header>
        <Navigation logo={name} />
      </header>
      <main>
        <Banner name={name} role={t('role')} github={github} />
        <Skills />
        <Projects />
      </main>
      <Footer name={name} linkedinProfile={linkedin} />
    </>
  );
}
