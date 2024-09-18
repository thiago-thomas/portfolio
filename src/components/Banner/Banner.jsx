import { ReactTyped } from 'react-typed'

import { useTranslation } from 'react-i18next';

import "./Banner.css";

export default function Banner({ name, role, github }) {
  const githubUserImg = `https://github.com/${github}.png`;

  const { t } = useTranslation();

  return (
    <section id="home">
      <div class="sec-contents">
        <div class="home-left">
          <h2>
            {t('hi')} <ReactTyped strings={[name, role]} typeSpeed={80} backDelay={2000} backSpeed={30} loop />
          </h2>
          <p>
            {t('aboutme')}
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
