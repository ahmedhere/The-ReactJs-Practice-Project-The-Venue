import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../Utils/MyButton";

export default class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30,
  };
  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1,
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal={() => {
              this.porcentage();
            }}
          >
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase Ticket before 20th of JUNE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur eum ipsam laudantium ea perspiciatis quisquam magni
                ducimus pariatur doloremque fuga. Deserunt in nemo assumenda ab
                nihil qui facilis, fugit id? Non asperiores atque eum, iste
              </p>
              <MyButton
                text="Purchase Tickets"
                bck_color="#ffa800"
                color="#ffffff"
                link="https://www.google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
