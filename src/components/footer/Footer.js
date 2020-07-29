import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const iconData = [
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
  {
    key: "instagram icon",
    url: "https://instagram.com/supremeautostylingofficial",
    parent: "fas fa-square fa-stack-2x instagram-square",
    clsNm: "fab fa-instagram fa-stack-1x fa-inverse footer-icon",
  },
  {
    key: "tiktok icon",
    url: "https://www.tiktok.com/supremeautostyling",
    parent: "fas fa-square fa-stack-2x tiktok-square",
    clsNm: "fab fa-tiktok fa-stack-1x fa-inverse footer-icon",
  },
];

function Footer(props) {
  const { icons = [] } = props;

  const socialIcons = icons.map((val) => iconData.find((obj) => obj.key.includes(val)));
  return (
    <footer>
      <Link to="/" className="footer-brand">
        SAS
      </Link>

      <div id="footer-social">
        {socialIcons.map((icon) => (
          <span key={icon.key} className="fa-stack fa-2x">
            <span className={icon.parent} />
            <a aria-label={icon.key} href={icon.url} className={icon.clsNm} target="blank">
              <span aria-hidden="true" />
            </a>
          </span>
        ))}
      </div>

      <div id="footer-legal" className="d-md-flex d-block">
        <div>© 2020</div>
        <div>Supreme Autostyling</div>
      </div>
    </footer>
  );
}

export default Footer;
