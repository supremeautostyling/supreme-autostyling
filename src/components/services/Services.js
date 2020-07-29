import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import SrvPkgLinks from "./SrvPkgLinks.js";

const chunk = (array, size) => {
  const chunked = [];
  let idx = 0;

  while (idx < array.length) {
    chunked.push(array.slice(idx, size + idx));
    idx += size;
  }

  return chunked;
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
    <div id="services-header">
      <h1>Services</h1>

      <div>
        <div>Select a package for more info</div>

        <small className="text-muted">
          <span>*Prices shown are </span>
          <span>as low as</span>
        </small>
      </div>
    </div>
  );
}

function ServicesLinks(props) {
  return chunk(SrvPkgLinks, 2).map((row, i) => (
    <div key={"row" + i} className="row tile-row">
      {row.map((pkg) => (
        <div key={pkg.name} className="col-sm-6">
          <Link to={pkg.route} className="pkg-link">
            <PkgTile {...pkg} />
          </Link>
        </div>
      ))}
    </div>
  ));
}

function Services(props) {
  return (
    <section id="services">
      <ServicesHeader />
      <ServicesLinks />
    </section>
  );
}

export default Services;
