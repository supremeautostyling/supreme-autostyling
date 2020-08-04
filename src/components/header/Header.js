import React from "react";
import { withRouter } from "react-router-dom";
import cover from "../../assets/images/cover/cover.png";
import tiktok1 from "../../assets/videos/tiktok1.mp4";
import "./Header.css";

function NameText(props) {
  return props.atRoot ? (
    <div id="header-name">
      <div>Supreme</div>
      <div>Autostyling</div>
    </div>
  ) : (
    <></>
  );
}

function CoverImage(props) {
  const { isMobile, atRoot } = props;
  return isMobile ? (
    atRoot ? (
      <div className="header-img-wrap">
        <img src={cover} alt="foam soap car" className="img-fluid header-img" />
      </div>
    ) : (
      <></>
    )
  ) : (
    <div className="bg-img" style={atRoot ? {} : { height: "0" }} />
  );
}

function CoverVideo(props) {
  return (
    <div id="header-video-wrap">
      <video autoPlay loop={true} muted playsInline src={tiktok1} />
    </div>
  );
}

function Header(props) {
  const { isMobile } = props;
  const { pathname } = window.location;
  const atRoot = pathname.length === 1;
  const coverImage = true;
  return (
    <div className="header-wrap">
      <header>
        <NameText atRoot={atRoot} />
        {coverImage ? (
          <CoverImage isMobile={isMobile} atRoot={atRoot} />
        ) : (
          <CoverVideo isMobile={isMobile} atRoot={atRoot} />
        )}
      </header>
    </div>
  );
}

export default withRouter(Header);
