import React from "react";

function ScrollTop(props) {
  return (
    <button
      id="scroll-top"
      className={props.showing ? "scroll-top-vis" : ""}
      onClick={() => window.scrollTo(0, 0)}
    >
      <span className="fa-stack fa-2x">
        <span className="fas fa-circle fa-stack-2x" />
        <span className="fas fa-chevron-up fa-stack-1x fa-inverse" />
      </span>
    </button>
  );
}

export default ScrollTop;
