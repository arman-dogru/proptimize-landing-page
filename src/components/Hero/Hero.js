import './Hero.css';
import { ReactComponent as HeroImg } from '../../assets/svgs/hth_hero_withoutbg.svg';
import BannerLogo from '../../assets/Logos/hthlogo_banner_ver.svg';

function Hero() {
  return (
    <>
      <div className="HeroHeading">
        <h3>
           &nbsp;&bull;&nbsp; February{' '}
          <time dateTime="03/02/2023">3</time>&ndash;
          <time dateTime="05/02/2023">5</time>, 2023
        </h3>
        <img class="BannerLogo" src={BannerLogo} alt="Hack the Hill"></img>
        <h3>Enabling &times; Carleton University</h3>
        <a
          className="HeroButton"
          target="_blank"
          href="https://hackthehill.com/register"
          rel="noreferrer"
        >
          <button>Register Now!</button>
        </a>
      </div>
      <HeroImg className="HeroImg" />
    </>
  );
}

export default Hero;
