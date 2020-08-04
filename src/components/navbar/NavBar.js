import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Headroom from "react-headroom";
import "./NavBar.css";

const sectionLinks = ["#services", "#gallery", "#about", "#contact"];

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: true,
      activeKey: "",
    };
  }

  componentDidUpdate(prevProps) {
    const { activeNav } = this.props;

    if (prevProps.activeNav.startsWith("#") && activeNav.startsWith("/")) {
      this.setState({ activeKey: "" });
    }
  }

  toggleNav = (expanded) => {
    this.setState({ expanded });
  };

  selectLink = (e, activeKey) => {
    const { activeNav } = this.props;
    const { pathname } = window.location;

    // condition for manual route control (to scroll to section)
    if (activeNav.startsWith("/") && pathname.length > 1) {
      e.preventDefault();
      window.scrollTo(0, 0);
      this.props.changeRoute(activeKey);
    }

    this.setState({ activeKey });
  };

  goHomeOrTop = (e) => {
    const {
      location: { pathname },
    } = this.props;

    if (pathname === "/") window.scrollTo(0, 0);
  };

  render() {
    const { activeKey, expanded } = this.state;
    return (
      <div id="headroom-navbar-wrap">
        <Headroom style={expanded ? {} : { height: "57px" }}>
          <Navbar collapseOnSelect onToggle={this.toggleNav} expand="sm" variant="dark" bg="dark">
            <Navbar.Brand as={NavLink} to="/" onClick={this.goHomeOrTop}>
              SAS
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="NavBar" />
            <Navbar.Collapse id="NavBar">
              <Nav activeKey={activeKey}>
                {sectionLinks.map((link) => (
                  <Nav.Link
                    key={link}
                    href={link}
                    eventKey={link}
                    onClick={(e) => this.selectLink(e, link)}
                  >
                    {link.slice(1)}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Headroom>
      </div>
    );
  }
}

export default withRouter(NavBar);
