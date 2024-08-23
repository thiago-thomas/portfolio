import "./Navigation.css";

export default function Navigation({ logo }) {
  return (
    <>
      <div>
        <a href="#" className="logo">
          {logo}
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
      <div>
        <button className="btn-primary">Contact</button>
      </div>
    </>
  );
}
