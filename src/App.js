import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import NavBar from "./components/navbar/NavBar.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Services from "./components/services/Services.js";
import Gallery from "./components/gallery/Gallery.js";
import About from "./components/about/About.js";
import Contact from "./components/contact/Contact.js";
import PackagePage from "./components/packages/PackagePage.js";
import NoMatch from "./components/noMatch/NoMatch.js";
import ScrollTop from "./components/scrollTop/ScrollTop.js";

import screenCheck from "./helpers/screenCheck.js";
//import GoogleAnalytics from "./utils/GoogleAnalytics.js";
import "./App.css";

const obsOpts = { root: null, threshold: new Array(101).fill(0).map((v, i) => i * 0.01) };

class App extends Component {
  constructor(props) {
    super(props);
    this._ref = React.createRef();

    this.state = {
      activeNav: "",
      isMobile: false,
      activeThing: { id: null, ratio: 0 },
    };

    this.sections = {};

    const callback = (entries) => {
      entries.forEach((entry) => (this.sections[entry.target.id].ratio = entry.intersectionRatio));

      const activeThing = Object.values(this.sections).reduce(
        (acc, value) => (value.ratio > acc.ratio ? value : acc),
        this.state.activeThing
      );

      if (activeThing.ratio > this.state.activeThing.ratio) {
        this.setState({ activeThing });
      }
    };

    this.observer = new IntersectionObserver(callback, obsOpts);
  }

  componentDidMount() {
    this.setState({ isMobile: screenCheck(navigator.userAgent) });

    const { pathname, hash } = this.props.location;

    if (hash || pathname === "/") {
      [...this._ref.current.children].forEach((el) => {
        this.sections[el.id] = { ref: el, id: el.id, ratio: 0 };
      });

      Object.values(this.sections).forEach((value) => this.observer.observe(value.ref));
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const { pathname, hash } = this.props.location;

      this.setState({
        activeNav: hash ? hash : pathname,
        //pkgPage: hash || pathname === "/" ? false : true,
      });
    }
  }

  changeRoute = (id) => {
    this.props.history.push(`/${id}`, {});

    setTimeout(this.scrollIntoView, 1500);
  };

  scrollIntoView = () => {
    const id = this.props.location.hash.slice(1);
    const section = [...this._ref.current.children].find((el) => el.id === id);

    section.scrollIntoView();
  };

  render() {
    const {
      activeNav,
      isMobile,
      activeThing: { id },
    } = this.state;
    const showScrollTop = id === "about" || id === "contact";
    return (
      <>
        <NavBar activeNav={activeNav} changeRoute={this.changeRoute} />
        <Header isMobile={isMobile} />
        {/*{GoogleAnalytics.init() && <GoogleAnalytics.RouteTracker />}*/}

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <main className="home-main" ref={this._ref}>
                <Services />
                <Gallery />
                <About />
                <Contact />
              </main>
            )}
          />
          <Route exact path="/services/:pkg" component={PackagePage} />
          <Route component={NoMatch} />
        </Switch>

        <ScrollTop showing={showScrollTop} />

        <Footer icons={["instagram", "tiktok"]} />
      </>
    );
  }
}

export default withRouter(App);
