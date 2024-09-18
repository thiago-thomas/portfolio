import Navigation from "./components/Navigation/Navigation.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import { useTranslation } from 'react-i18next';

import "./App.css";

export default function App() {
  const { t, i18n } = useTranslation();

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
  }

  const name = "Thiago Thomas";
  const github = "thiago-thomas";

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
    </>
  );
}
