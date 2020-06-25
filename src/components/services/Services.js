import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const pkgLinks = [
  {
    name: "Bronze",
    description: "A simple maintenance wash for the interior & exterior",
    alaPrice: 80,
    bgColor: { background: "rgba(176,141,87,0.5)" },
    route: "/services/bronze",
  },
  {
    name: "Silver",
    description:
      "A light cleaning for the interior & exterior with a 6 month spray ceramic sealant",
    alaPrice: 120,
    bgColor: { background: "rgba(170,169,173,0.5)" },
    route: "/services/silver",
  },
  {
    name: "Gold",
    description:
      "A deep interior & exterior cleaning with a little protection for the paint and windows.",
    alaPrice: 150,
    bgColor: { background: "rgba(212,175,55,0.5)" },
    route: "/services/gold",
  },
  {
    name: "Platinum",
    description:
      "A good washing and decontamination of interior & exterior with short term protection treatments",
    alaPrice: 180,
    bgColor: { background: "rgba(229,228,226,0.75)" },
    route: "/services/platinum",
  },
  {
    name: "Diamond",
    description:
      "A good route to restore some neglected paint and some decent protection to prevent damage in the near future. Interior is brought back to as new condition as possible",
    alaPrice: 350,
    bgColor: { background: "rgba(185,242,255,0.5)" },
    route: "/services/diamond",
  },
  {
    name: "Supreme",
    description: "The full treatment, everything is brought back to life and protected for years.",
    alaPrice: 1400,
    bgColor: { background: "rgba(255,198,185,0.5)" },
    route: "/services/supreme",
  },
];

function PkgTile(props) {
  const { bgColor, name, alaPrice, description } = props;
  const bgAdj = bgColor.background.slice(0, bgColor.background.lastIndexOf(","));
  const bgc = bgAdj + ",1)";
  return (
    <div
      className="pkg-tile"
      style={{ background: `linear-gradient(187deg, rgba(0,0,0,0.05) 0%, ${bgc} 100%)` }}
    >
      <div className="d-flex">
        <div className="p-1 mr-auto" style={{ background: "rgba(0,0,0,0.7)", borderRadius: "10%" }}>
          <h4>
            <span style={{ color: bgc }}>{name}</span>
            <span className="fas fa-medal" style={{ color: bgc }} />
          </h4>
        </div>
        <div>
          <h4>${alaPrice}</h4>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}

function PkgBtn(props) {
  const { bgColor, alaPrice, description } = props;
  const teaser = description.split(" ").slice(0, 4).join(" ");
  const bgAdj = bgColor.background.slice(0, bgColor.background.lastIndexOf(","));
  const bgc = bgAdj + ",1)";
  return (
    <div
      className="pkg-btn"
      style={{
        border: "3px solid " + bgc,
        background: bgColor.background,
        borderRadius: "55%",
        margin: "0.5rem auto",
        textAlign: "center",
        display: "inline-flex",
        flexWrap: "wrap",
      }}
    >
      <div className="d-flex justify-content-center">
        <div className="">
          <h4>
            <span className="fas fa-medal" style={{ color: bgc }} />
          </h4>
        </div>
        <div>
          <p>{teaser}...</p>
        </div>
        <div>
          <h4>${alaPrice}</h4>
        </div>
      </div>
    </div>
  );
}

class Services extends Component {
  constructor(props) {
    super(props);

    this.servicesRef = React.createRef();

    this.state = {};
  }

  componentDidMount() {
    this.props.setRef(this.servicesRef.current);
  }

  render() {
    const pkgView = "tile"; // tile || btn
    return (
      <section id="services" ref={this.servicesRef}>
        <h1>Services</h1>
        <div className="row no-gutters">
          <div className="col">
            {pkgLinks.map((pkg) => (
              <Link key={pkg.name} to={pkg.route} className="pkg-link">
                {pkgView === "tile" ? <PkgTile {...pkg} /> : <PkgBtn {...pkg} />}
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
