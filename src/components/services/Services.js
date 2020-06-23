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
    return (
      <section id="services" ref={this.servicesRef}>
        <h1>Services</h1>
        {pkgLinks.map((pkg) => (
          <Link key={pkg.name} to={pkg.route} className="pkg-link">
            <div className="pkg-tile" style={pkg.bgColor}>
              <div className="d-flex">
                <div className="mr-auto">
                  <h4>{pkg.name}</h4>
                </div>
                <div>
                  <h4>${pkg.alaPrice}</h4>
                </div>
              </div>
              <p>{pkg.description}</p>
            </div>
          </Link>
        ))}
      </section>
    );
  }
}

export default Services;
