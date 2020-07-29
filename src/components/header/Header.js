import React from "react";
import { withRouter } from "react-router-dom";
import foamJeep from "../../assets/images/cover/foamJeep.png";
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
        <img src={foamJeep} alt="foam jeep" className="img-fluid header-img" />
      </div>
    ) : (
      <></>
    )
  ) : (
    <div className="bg-img" style={atRoot ? {} : { height: "0" }} />
  );
}

function Header(props) {
  const {
    isMobile,
    location: { pathname },
  } = props;

  return (
    <div className="header-wrap">
      <header>
        <NameText atRoot={pathname === "/"} />
        <CoverImage isMobile={isMobile} atRoot={pathname === "/"} />
      </header>
    </div>
  );
}

export default withRouter(Header);
