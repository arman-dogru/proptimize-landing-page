import './Hero.css';
import BannerLogo from '../../assets/Images/Welcome-Video.mp4';

function Hero() {
  return (
    <>
      <div className="HeroHeading">
        <video loop={true} autoPlay={true}  muted={true} controls="" className="HeroVideo">
          <source src={BannerLogo} type="video/mp4" />
        </video>
        </div>
    </>
  );
}

export default Hero;
