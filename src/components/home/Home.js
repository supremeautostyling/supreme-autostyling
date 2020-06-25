import React from "react";
import { withRouter } from "react-router-dom";
import Services from "../services/Services.js";
import Gallery from "../gallery/Gallery.js";
import About from "../about/About.js";
import Contact from "../contact/Contact.js";
import "./Home.css";

function Home(props) {
  return (
    <main className="home-main">
      <Services setRef={props.setRef} />
      <Gallery setRef={props.setRef} />
      <About setRef={props.setRef} />
      <Contact setRef={props.setRef} />
    </main>
  );
}

export default withRouter(Home);
