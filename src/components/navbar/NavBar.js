import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Headroom from "react-headroom";
import "./NavBar.css";

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
    if (this.props.activeNav.startsWith("/")) {
      e.preventDefault();

      this.props.changeRoute(activeKey);
    }

    this.setState({ activeKey });
  };

  render() {
    const { activeKey, expanded } = this.state;
    return (
      <div id="headroom-navbar-wrap">
        <Headroom style={expanded ? {} : { height: "57px" }}>
          <Navbar collapseOnSelect onToggle={this.toggleNav} expand="sm" variant="dark" bg="dark">
            <Navbar.Brand as={NavLink} to="/">
              SAS
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="NavBar" />
            <Navbar.Collapse id="NavBar">
              <Nav activeKey={activeKey}>
                {["#services", "#gallery", "#about", "#contact"].map((link, idx) => (
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
