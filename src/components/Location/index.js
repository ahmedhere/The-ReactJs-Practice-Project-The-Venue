import React, { Component } from "react";

export default class Location extends Component {
  render() {
    return (
      <div className="location_wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13604.282740611525!2d74.3438305!3d31.5222185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905669dfae14b%3A0x892fcc83e95c51ee!2sKhudi%20Ventures!5e0!3m2!1sen!2s!4v1682401185914!5m2!1sen!2s"
          style={{ border: 0, width: "100%", height: "500px" }}
          allowfullscreen=""
          frameBorder={0}
          title="Location "
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="location_tag">
          <div>Location</div>
        </div>
      </div>
    );
  }
}
