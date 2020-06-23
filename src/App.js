import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
//import { AnimatedSwitch, AnimatedRoute } from "react-router-transition";

import NavBar from "./components/navbar/NavBar.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Home from "./components/home/Home.js";
import PackagePage from "./components/packages/PackagePage.js";
import ScrollTop from "./components/scrollTop/ScrollTop.js";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showScrollBtn: false,
      pkgPage: false,
      activeNav: "",
      refs: {},
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const { pathname, hash } = this.props.location;

      this.setState({
        activeNav: hash ? hash : pathname,
        pkgPage: hash || pathname === "/" ? false : true,
      });
    }
  }

  changeRoute = (activeNav) => {
    const id = activeNav.slice(1);

    this.props.history.push(`/${activeNav}`, {});

    setTimeout(() => {
      this.state.refs[id].scrollIntoView();
    }, 300);
  };

  setRef = (ref) => {
    this.setState((prev) => {
      prev.refs[ref.id] = ref;
      return prev;
    });
  };

  render() {
    const { showScrollBtn, activeNav, pkgPage } = this.state;
    return (
      <>
        <NavBar activeNav={activeNav} changeRoute={this.changeRoute} />

        {!pkgPage && <Header {...this.props.location} />}

        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} setRef={this.setRef} />} />
          <Route
            exact
            path="/services/:pkg"
            render={(props) => <PackagePage {...props} setPkg={this.setPkg} />}
          />
        </Switch>

        <ScrollTop vis={showScrollBtn} />
        <Footer />
      </>
    );
  }
}

export default withRouter(App);
