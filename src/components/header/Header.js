import React from "react";
import { withRouter } from "react-router-dom";
import cover from "../../assets/images/cover/cover.jpg";
import "./Header.css";

function NameText(props) {
  return (
    <div id="header-name" className={!props.atRoot ? "hide-name" : ""}>
      <div>Supreme</div>
      <div>Autostyling</div>
    </div>
  );
}

function CoverImage(props) {
  const { isMobile, atRoot } = props;

  if (!atRoot) return <></>;

  if (isMobile) {
    return (
      <div className="header-img-wrap">
        <img src={cover} alt="foam soap car" className="img-fluid header-img" />
      </div>
    );
  } else {
    return <div className="bg-img" style={atRoot ? {} : { height: "0" }} />;
  }
}

function Header(props) {
  const { isMobile } = props;
  const atRoot = window.location.pathname.length === 1;
  return (
    <div className="header-wrap">
      <header>
        <NameText atRoot={atRoot} />
        <CoverImage isMobile={isMobile} atRoot={atRoot} />
      </header>
    </div>
  );
}

export default withRouter(Header);
