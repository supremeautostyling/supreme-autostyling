import React from "react";
import InstagramIcon from "../../assets/images/icons/InstagramIcon.png";
import TiktokIcon from "../../assets/images/icons/TiktokIcon.png";
import "./Footer.css";
const icons = [
  /*
  {
    key: "facebook icon",
    url: "https://www.facebook.com/supremeautostyling",
    parent: "fas fa-square fa-stack-2x facebook-square",
    clsNm: "fab fa-facebook-f fa-stack-1x fa-inverse footer-icon",
  },
  {
    key: "twitter icon",
    url: "https://twitter.com/supremeautostyling",
    parent: "fas fa-square fa-stack-2x twitter-square",
    clsNm: "fab fa-twitter fa-stack-1x fa-inverse footer-icon",
  },
  {
    key: "youtube icon",
    url: "https://youtube.com/supremeautostyling",
    parent: "fas fa-square fa-stack-2x youtube-square",
    clsNm: "fab fa-youtube fa-stack-1x fa-inverse footer-icon",
  },
  */
  {
    key: "instagram icon",
    url: "https://instagram.com/supremeautostylingofficial",
    parent: "fas fa-square fa-stack-2x instagram-square",
    clsNm: "fab fa-instagram fa-stack-1x fa-inverse footer-icon",
  },
  {
    key: "tiktok icon",
    url: "tiktok.com/supremeautostyling",
    parent: "fas fa-square fa-stack-2x tiktok-square",
    clsNm: "fab fa-tiktok fa-stack-1x fa-inverse footer-icon",
  },
];
function FooterSocial() {
  return (
    <div id="footer-social">
      {icons.map((icon) => (
        <span key={icon.key} className="fa-stack fa-2x">
          <span className={icon.parent} />
          <a aria-label={icon.key} href={icon.url} className={icon.clsNm} target="blank">
            <span aria-hidden="true" />
          </a>
        </span>
      ))}
    </div>
  );
}

/*
<div id="footer-social">
          <a href="supremeautostyling.com" target="blank" className="social-link mr-5">
            <span className="fab fa-instagram" />
          </a>
          <a href="supremeautostyling.com" target="blank" className="social-link">
            <span className="fab fa-tiktok" />
          </a>
        </div>
*/

function Footer() {
  const faIcons = true;
  return (
    <footer>
      <a className="footer-brand" href="/">
        SAS
      </a>
      {faIcons ? (
        <FooterSocial />
      ) : (
        <div id="footer-social">
          <a href="supremeautostyling.com" target="blank" className="social-link mr-5">
            <img src={InstagramIcon} alt="instagram logo" className="social-icon" />
          </a>
          <a href="supremeautostyling.com" target="blank" className="social-link">
            <img src={TiktokIcon} alt="tiktok logo" className="social-icon" />
          </a>
        </div>
      )}

      <div id="footer-legal" className="d-md-flex d-block">
        <div>© 2020</div>
        <div>Supreme Autostyling</div>
      </div>
    </footer>
  );
}

export default Footer;
