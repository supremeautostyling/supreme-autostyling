import React, { useState, useRef } from "react";
import Collapse from "react-bootstrap/Collapse";
import "./About.css";

const txt = [
  "The love for cleanliness didn’t start at a young age. It wasn’t until he got his first car that keeping it clean was a top priority. Jaice from Supreme Autostyling was a young high-school kid with a strong love for his first car and with that love came the responsibility to keep it clean....really clean.",
  "After he started washing his car routinely and then helping his friends do theirs, he decided",
  " he didn’t mind this small hobby and making some money during it wouldn’t be half bad at all. After countless hours of self teaching, trial and error and late nights on YouTube, Supreme Autostyling was created.",
  "It started as a small side hustle to keep Jaices’ neighborhoods cars clean. This hustle began to expand outside the neighborhood and before Jaice knew it, he had left his normal day job and became a young entrepreneur. He is now serving the city of Cumming and beyond with clean and protected vehicles every day!",
];

function About() {
  const [showMore, setMore] = useState(false);
  const aboutRef = useRef(null);
  return (
    <section id="about" ref={aboutRef}>
      <h1>About</h1>

      <div className="about-text-wrap">
        <p>{txt[0]}</p>

        <p className={`${showMore ? "" : "text-muted"}`}>
          <span>{txt[1]}</span>
          <span>{showMore ? txt[2] : "..."}</span>
        </p>

        <Collapse in={showMore}>
          <div>
            <div>{txt[3]}</div>
          </div>
        </Collapse>
      </div>

      <button
        className="btn btn-link"
        title={showMore ? "Show less" : "Show more"}
        onClick={() => setMore(!showMore)}
      >
        {showMore ? "less" : "more"}
      </button>
    </section>
  );
}

export default About;
