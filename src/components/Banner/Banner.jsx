import "./Banner.css";

export default function Banner({ name, role, github }) {
  const githubUserImg = `https://github.com/${github}.png`;

  return (
    <section id="home">
      <div class="sec-contents">
        <div class="home-left">
          <h2>
            Hey, I'm {name}
            <br />
            I'm a {role}
          </h2>
          <p>
            I am a person who is very passionate about technology and I seek to
            study and learn in this area day after day, I always update myself
            on new technologies, and always delving into the issues I already
            know, such as learning new technologies that arise more and more.
            each day.
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
  );
}
