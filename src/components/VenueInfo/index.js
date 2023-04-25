import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import icon_Calendar from "../../resources/images/icons/calendar.png";
import icon_Location from "../../resources/images/icons/location.png";

export default class VenueInfo extends Component {
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper">
          <div className="vn_wrapper">
            <Zoom duration={500}>
              <div className="vn_item">
                <div className="vn_outer">
                  <div className="vn_inner">
                    <div className="vn_icon_square bck_red"></div>
                    <div
                      className="vn_icon"
                      style={{
                        backgroundImage: `url(${icon_Calendar})`,
                      }}
                    ></div>
                    <div className="vn_title">Event Date & Time</div>
                    <div className="vn_desc">Dec, 23, 2023 @ 10:00 PM</div>
                  </div>
                </div>
              </div>
            </Zoom>
            <Zoom duration={500} delay={500}>
              <div className="vn_item">
                <div className="vn_outer">
                  <div className="vn_inner">
                    <div className="vn_icon_square bck_yellow"></div>
                    <div
                      className="vn_icon"
                      style={{
                        backgroundImage: `url(${icon_Location})`,
                      }}
                    ></div>
                    <div className="vn_title">Event Location</div>
                    <div className="vn_desc">
                      {" "}
                      345 speer street, Lahore, Pakistan{" "}
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}
