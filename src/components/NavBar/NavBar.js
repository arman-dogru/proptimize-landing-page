import './NavBar.css';
import { Link } from 'react-scroll';
import MLH from '../../assets/Logos/mlhbadge.svg';
import BannerLogo from '../../assets/Logos/proptimize-small.png';
function Navbar() {
  return (
    <div className="Navbar">
        <img className='logo' alt='Logo' src={BannerLogo}></img>
        <div className='Items'>
          <div className='Item'><Link to="FAQ" spy={true} smooth={true} offset={-30} duration={500}>Contact</Link></div>
          <div className='Item'><Link to="Collaborators" spy={true} smooth={true} offset={-30} duration={500}>Founders</Link></div>
          <div className='Item'><Link to="Events" spy={true} smooth={true} offset={0} duration={500}>Pricing</Link></div>
          <div className='Item'><Link to="Sponsors" spy={true} smooth={true} offset={-30} duration={500}>Features</Link></div>
          <div className='Item'><Link to="About" spy={true} smooth={true} offset={-30} duration={500}>About Us</Link></div> 
        </div>
        
    </div>
  );
}

export default Navbar;