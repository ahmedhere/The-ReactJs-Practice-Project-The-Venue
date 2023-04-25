import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export default class TimeUntil extends Component {
  state = {
    deadline: "Dec, 25, 2023",
    Hours: "0",
    Minutes: "0",
    Seconds: "0",
    Days: "0",
  };

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time > 0) {
      const seconds = Math.floor((time / 1000) % 60);
      const Minutes = Math.floor((time / 1000 / 60) % 60);
      const Hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const Days = Math.floor(time / (1000 * 60 * 60 * 24));

      this.setState({
        Hours,
        Seconds: seconds,
        Minutes,
        Days,
      });
    } else {
      console.log("date passed");
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.getTimeUntil(this.state.deadline);
    }, 1000);
  }
  render() {
    return (
      <div>
        <Fade left delay={1000}>
          <div className="countdown_wrapper">
            <div className="countdown_top">Event starts in</div>
            <div className="countdown_bottom">
              <div className="countdown_item">
                <div className="countdown_time">{this.state.Days}</div>
                <div className="countdown_tag">Days</div>
              </div>
              <div className="countdown_item">
                <div className="countdown_time">{this.state.Hours}</div>
                <div className="countdown_tag">Hours</div>
              </div>
              <div className="countdown_item">
                <div className="countdown_time">{this.state.Minutes}</div>
                <div className="countdown_tag">Minutes</div>
              </div>
              <div className="countdown_item">
                <div className="countdown_time">{this.state.Seconds}</div>
                <div className="countdown_tag">Seconds</div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}
