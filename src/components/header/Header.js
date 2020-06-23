import React from "react";
import { withRouter } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <div id="main-header-wrap">
      <header className="main-header">
        <div id="header-name">
          <div className="name-text">Supreme</div>
          <div className="name-text">Autostyling</div>
        </div>
      </header>
    </div>
  );
}

export default withRouter(Header);
