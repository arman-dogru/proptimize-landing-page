import './NavBar.css';
import { Link } from 'react-scroll';
import BannerLogo from '../../assets/Logos/White_trimmed.png';
function Navbar() {
  return (
    <div className="Navbar">
        <img className='logo' alt='Logo' src={BannerLogo}></img>
        <div className='Items'>
          <div className='Item'><Link to="Footer" spy={true} smooth={true} offset={-30} duration={500}>Contact</Link></div>
          <div className='Item'><Link to="FAQ" spy={true} smooth={true} offset={500} duration={500}>Founders</Link></div>
          <div className='Item'><Link to="FAQ" spy={true} smooth={true} offset={700} duration={500}>FAQs</Link></div>
          <div className='Item'><Link to="FAQ" spy={true} smooth={true} offset={-30} duration={500}>Features</Link></div>
          <div className='Item'><Link to="About" spy={true} smooth={true} offset={-30} duration={500}>About Us</Link></div> 
        </div>
    </div>
  );
}

export default Navbar;