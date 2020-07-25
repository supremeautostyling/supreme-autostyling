import React from "react";
//import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";
import foamJeep from "../../assets/images/cover/foamJeep.jpg";
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
    <div className="header-img-wrap" style={atRoot ? {} : { height: "0" }}>
      <img src={foamJeep} alt="foam jeep" className="img-fluid header-img" />
    </div>
  ) : (
    <div className="bg-img" style={atRoot ? {} : { height: "0" }} />
  );
}

function Greeting() {
  return (
    <div className="header-greeting">
      <p>All your transport, Driven Clean!</p>
    </div>
  );
}

function Header(props) {
  const {
    isMobile,
    greet,
    location: { pathname },
  } = props;
  return (
    <div className="header-wrap">
      <header>
        <NameText atRoot={pathname === "/"} />
        <CoverImage isMobile={isMobile} atRoot={pathname === "/"} />
      </header>
      {greet && <Greeting />}
    </div>
  );
}

export default withRouter(Header);
