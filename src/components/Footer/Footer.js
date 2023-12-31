import './Footer.css';
import React from "react";
import FooterLogo from "../../assets/Logos/Blue-trimmed.png";
import 'boxicons';
import MLH_code_of_conduct from "../../assets/Documents/mlh-code-of-conduct.pdf";

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterBody">
        <div className="FooterLogo">
          <img src={FooterLogo} alt="Logo" />
        </div>
        <div className="LogoText">
          <p>Unlocking the value of Proptech worldwide.</p>
        </div>
        <div class="FooterContainer">
          <div className="MediaLinks">
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
          <div className='FooterLinks'>
            <a href="" target="_blank">Code Of Conduct</a>
            <a href="" target="_blank">Privacy Policy</a>
            {/* <a href={MLH_code_of_conduct}>Hack the Hill Constitution</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
