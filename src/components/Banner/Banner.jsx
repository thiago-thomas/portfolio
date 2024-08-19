import "./Banner.css";

export default function Banner({ name, role, github }) {
  const githubUserImg = `https://github.com/${github}.png`;

  return (
    <section id="home">
      <section id="home">
        <div class="sec-contents">
          <div class="home-left">
            <h1>
              Hello, I'm {name} {role}
            </h1>
            <p>
              Welcome to my portfolio, here you will find some of my work as a
              {" " + role}, stay cozy!
            </p>
          </div>
          <div class="home-right">
            <div className="img-container">
              <img
                src={githubUserImg}
                alt={name + " picture"}
                class="home-right-img"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
