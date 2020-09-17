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
    this._ref = React.createRef(); // for <main> give access to children
    this.galleryRef = React.createRef(); // for <Gallery> give access to play/pause

    this.state = {
      activeNav: "",
      isMobile: false,
      activeThing: { id: null, ratio: 0 },
    };

    this.sections = {};

    // observer callback to update activeThing
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
    /*
      init observer only when mount is at root,
      if not root error occur bc missing dom elements
    */
    if (hash || pathname === "/") {
      [...this._ref.current.children].forEach((el) => {
        this.sections[el.id] = { ref: el, id: el.id, ratio: 0 };
      });

      Object.values(this.sections).forEach((value) => this.observer.observe(value.ref));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;
    const { activeThing } = this.state;

    // updates when url changes
    if (location !== prevProps.location) {
      const { pathname, hash } = location;

      this.setState({ activeNav: hash ? hash : pathname });

      if (!hash && pathname.length > 1) {
        window.scrollTo(0, 0);
      }
    }

    // updates when observer changes activeThing (scrolling)
    // toggle slideshow play/pause when on/off screen
    if (activeThing.id === "gallery" && prevState.activeThing.id !== "gallery") {
      this.galleryRef.current.play();
    }
    if (activeThing.id !== "gallery" && prevState.activeThing.id === "gallery") {
      this.galleryRef.current.pause();
    }
  }

  // for scrolling to home section element when current route is not root
  changeRoute = (id) => {
    this.props.history.push(`/${id}`, {});

    setTimeout(() => {
      let pathId = this.props.location.hash.slice(1);
      let section = [...this._ref.current.children].find((el) => el.id === pathId);
      section.scrollIntoView();
    }, 1250);
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
            render={() => (
              <main className="home-main" ref={this._ref}>
                <Services />
                <Gallery galleryRef={this.galleryRef} />
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
