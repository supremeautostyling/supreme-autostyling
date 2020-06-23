import React from "react";
import InstagramIcon from "../../assets/images/icons/InstagramIcon.png";
import TiktokIcon from "../../assets/images/icons/TiktokIcon.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <a className="footer-brand" href="/">
        SAS
      </a>

      <div id="footer-social">
        <a href="supremeautostyling.com" target="blank" className="social-link mr-5">
          <img src={InstagramIcon} alt="instagram logo" className="social-icon" />
        </a>
        <a href="supremeautostyling.com" target="blank" className="social-link">
          <img src={TiktokIcon} alt="tiktok logo" className="social-icon" />
        </a>
      </div>

      <div id="footer-legal" className="d-md-flex d-block">
        <div>© 2020</div>
        <div>Supreme Autostyling</div>
      </div>
    </footer>
  );
}

export default Footer;
