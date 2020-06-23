import React from "react";

import "./ScrollTop.css";

function ScrollTop(props) {
  return (
    <button
      id="scroll-top"
      className={props.vis ? "scroll-top-vis" : ""}
      onClick={() => window.scrollTo(0, 0)}
    />
  );
}

export default ScrollTop;
