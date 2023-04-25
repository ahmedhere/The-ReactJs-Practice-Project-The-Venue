import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/Header_Footer/Header";
import Featured from "./components/Featured";
import VenueInfo from "./components/VenueInfo";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import Footer from "./components/Header_Footer/Footer";
import { Element } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "red", height: "1500px" }}>
        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="Venue">
          <VenueInfo />
        </Element>
        <Element name="Highlights">
          <Highlights />
        </Element>
        <Element name="Pricing">
          <Pricing />
        </Element>
        <Element name="Location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
