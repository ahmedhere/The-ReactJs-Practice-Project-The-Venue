import React, { Component } from "react";
import Description from "./Description";
import Discount from "./Discount";
export default class Highlights extends Component {
  render() {
    return (
      <div className="highlight_wrapper">
        <Description />
        <Discount />
      </div>
    );
  }
}
