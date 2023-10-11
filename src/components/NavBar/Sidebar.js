import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import { Link } from 'react-scroll';
import 'boxicons';
import { useState } from 'react';

export default props => {
  const [isMenuOpen, handleMenu] = useState(false);
  const handleCloseMenu = () => {
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };
  return (
    <div className='outer'>
    <Menu right width={'100%'} isOpen={isMenuOpen} onStateChange={handleStateChange}>
      <div className='Item'><Link to="Footer" spy={true} smooth={true} offset={-30} duration={500}>Contact</Link></div>
      <div className='Item'><Link to="FAQ" spy={true} smooth={true} offset={500} duration={500}>Founders</Link></div>
      <div className='Item'><Link to="FAQ" spy={true} smooth={true} offset={700} duration={500}>FAQs</Link></div>
      <div className='Item'><Link to="FAQ" spy={true} smooth={true} offset={-30} duration={500}>Features</Link></div>
      <div className='Item'><Link to="About" spy={true} smooth={true} offset={-30} duration={500}>About Us</Link></div> 
      <div className="row">
        <a href="https://www.facebook.com/PropTPlatforms" target="_blank">
          <box-icon color='#ffffff' animation='tada-hover' type="logo" name="facebook-square"/>
        </a>
        <a href="https://twitter.com/proptimize" target="_blank">
          <box-icon color='#ffffff' animation='tada-hover' name="twitter" type="logo" />
        </a>
        <a href="https://www.linkedin.com/company/proptimize-inc/" target="_blank">
          <box-icon color='#ffffff' animation='tada-hover' name='linkedin' type='logo' ></box-icon>
        </a>
        <a href="mailto:info@proptimize.co" target="_blank">
          <box-icon color='#ffffff' animation='tada-hover' name='envelope' type='logo' ></box-icon>
        </a>
      </div>
    </Menu>
    </div>

  );
};
