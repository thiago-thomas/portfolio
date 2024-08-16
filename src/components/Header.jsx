import "./Header.css";

export default function Header({ title }) {
  return (
    <header>
      <div>
        <a href="#" className="logo">
          {title}
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
        </ul>
      </nav>
      <div>
        <button className="btn-primary">Contact</button>
      </div>
    </header>
  );
}
