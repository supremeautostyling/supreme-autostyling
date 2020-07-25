import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import SrvPkgLinks from "./SrvPkgLinks.js";

const chunk = (array, size) => {
  const chunked_arr = [];
  let index = 0;

  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }

  return chunked_arr;
};

function PkgTile(props) {
  const {
    bgColor: { background: bg },
    name,
    alaPrice,
    description,
    textShadow,
  } = props;
  const bgc = bg.slice(0, bg.lastIndexOf(",")) + ",1)";
  return (
    <div className="pkg-tile" style={{ backgroundColor: bg }}>
      <div className="d-flex">
        <div className="p-1 mr-auto">
          <h4>
            <span>{name}</span>
            <span className="fas fa-medal" style={{ color: bgc, textShadow }} />
          </h4>
        </div>
        <div>
          <h4>${alaPrice}+</h4>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}

function ServicesHeader(props) {
  return (
    <div>
      <h1 className="mr-auto">Services</h1>
      <div className="d-flex align-items-center mb-3">
        <p className="mb-0 mr-auto">
          {props.isMobile ? "Select" : "Click"} a package for more info
        </p>
        <small className="text-muted px-1">
          *Prices shown are <span style={{ fontStyle: "italic" }}>as low as</span>
        </small>
      </div>
    </div>
  );
}

function ServicesLinks(props) {
  const tileLinks = chunk(SrvPkgLinks, 2);
  return tileLinks.map((row, i) => (
    <div key={"row" + i} className="row tile-row">
      {row.map((pkg) => (
        <div key={pkg.name} className="col-sm-6 mb-0 mb-sm-3">
          <Link to={pkg.route} className="pkg-link">
            <PkgTile {...pkg} />
          </Link>
        </div>
      ))}
    </div>
  ));
}

class Services extends Component {
  constructor(props) {
    super(props);
    this.servicesRef = React.createRef();
  }

  componentDidMount() {
    // pass ref on mount
    this.props.setRef(this.servicesRef.current);
  }

  render() {
    return (
      <section id="services" ref={this.servicesRef}>
        <ServicesHeader isMobile={this.props.isMobile} />
        <ServicesLinks />
      </section>
    );
  }
}

export default Services;
