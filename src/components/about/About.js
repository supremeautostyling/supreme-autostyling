import React, { Component } from "react";
import Collapse from "react-bootstrap/Collapse";
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);

    this.aboutRef = React.createRef();

    this.state = {
      showMore: false,
    };
  }

  componentDidMount() {
    this.props.setRef(this.aboutRef.current);
  }

  toggleShowMore = (e) => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    const { showMore } = this.state;
    const showJaice = false;
    return (
      <section id="about" ref={this.aboutRef}>
        <h1>About</h1>

        <div className="about-text-wrap">
          <div>
            The love for cleanliness didn’t start at a young age. It wasn’t until he got his first
            car that keeping it clean was a top priority. Jaice from Supreme Autostyling was a young
            high-school kid with a strong love for his first car and with that love came the
            responsibility to keep it clean....really clean.
          </div>

          <div style={{ opacity: showMore ? "1" : "0.5" }}>
            After he started washing his car routinely and then helping his friends do theirs, he
            decided{" "}
            {showMore
              ? "he didn’t mind this small hobby and making some money during it wouldn’t be half bad at all."
              : "..."}
          </div>

          <Collapse in={showMore}>
            <div>
              After countless hours of self teaching, trial and error and late nights on YouTube,
              Supreme Autostyling was created. It started as a small side hustle to keep Jaices’
              neighborhoods cars clean. This hustle began to expand outside the neighborhood and
              before Jaice knew it, he had left his normal day job and became a young entrepreneur.
              He is now serving the city of Cumming and beyond with clean and protected vehicles
              every day!
            </div>
          </Collapse>

          <div
            className="show-more-wrap"
            style={showJaice ? { position: "relative", bottom: showMore ? "0" : "2rem" } : {}}
          >
            <button
              className="btn btn-link"
              title={showMore ? "Show less" : "Show more"}
              onClick={this.toggleShowMore}
              style={
                showJaice
                  ? { background: "rgba(0,0,0,0.8)", color: "#ffffff", borderRadius: "100%" }
                  : {}
              }
            >
              {showJaice ? (
                <span className={`fas fa-angle-double-${showMore ? "up" : "down"}`} />
              ) : (
                <span>{showMore ? "less" : "more"}</span>
              )}
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
