import React, { Component } from "react";
import Button from "../Utils/MyButton";
import Zoom from "react-reveal/Zoom";

export default class Pricing extends Component {
  state = {
    prices: [100, 150, 200],
    postions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus maxime pariatur non mollitia necessitatibus officia,",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus maxime pariatur non mollitia necessitatibus officia,",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus maxime pariatur non mollitia necessitatibus officia,",
    ],
    links: ["http://sales/b", "http://sales/m", "http://sales/s"],
    delay: [500, 0, 500],
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.postions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <Button
                link={this.state.links[i]}
                bck_color="#ffa800"
                color="#ffffff"
                text="purchase tickets"
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2> Pricing </h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
