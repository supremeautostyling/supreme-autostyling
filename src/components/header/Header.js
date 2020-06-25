import React from "react";
import { withRouter } from "react-router-dom";
import foamJeep from "../../assets/images/cover/foamJeep.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="header-wrap">
      <header>
        <div id="header-name">
          <div>Supreme</div>
          <div>Autostyling</div>
        </div>

        <div className="header-img-wrap">
          <img src={foamJeep} alt="foam jeep" className="img-fluid header-img" />
        </div>
      </header>
    </div>
  );
}

export default withRouter(Header);
