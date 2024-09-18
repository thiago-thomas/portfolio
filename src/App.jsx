import Navigation from "./components/Navigation/Navigation.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";

import { useTranslation } from 'react-i18next';
import { useState } from "react";

import "./App.css";

export default function App() {
  const { t, i18n } = useTranslation();
  const [role, setRole] = useState(t('role'));

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
    setRole(t('role'));
  }

  const name = "Thiago Thomas";
  const github = "thiago-thomas";

  return (
    <>
      <header>
        <Navigation logo={name} />
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('pt')}>Português</button>
      </header>
      <main>
        <Banner name={name} role={role} github={github} />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
