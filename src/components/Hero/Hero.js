import './Hero.css';
import BannerLogo from '../../assets/Logos/proptimize-large.png';

function Hero() {
  return (
    <>
      <div className="HeroHeading">
        <h3> WE ARE COOKING UP SOMETHING SPECIAL!!  
        </h3>
        <img class="BannerLogo" src={BannerLogo} alt="Hack the Hill"></img>
        <h3> Unlocking proptech for our customers </h3>
        </div>
    </>
  );
}

export default Hero;
