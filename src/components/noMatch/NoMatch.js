import React from "react";

function NoMatch() {
  return (
    <div id="no-route-match" className="flex-grow-1">
      <div className="far fa-frown mb-3" />

      <h1>404</h1>

      <h3>Page not found</h3>

      <div>
        <div>The requested page doesn't exist or an error occurred.</div>
        <div>Go back or select any of the top navigation links.</div>
      </div>
    </div>
  );
}

export default NoMatch;
