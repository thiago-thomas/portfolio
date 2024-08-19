import "./App.css";
import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";

export default function App() {
  const name = "Thiago Thomas";
  const role = "Front-End Developer";
  const github = "thiago-thomas";

  return (
    <>
      <Header title={name} />
      <Banner name={name} role={role} github={github} />
    </>
  );
}
