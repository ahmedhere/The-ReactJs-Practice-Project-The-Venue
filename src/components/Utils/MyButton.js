import React, { Component } from "react";
import { Button } from "@mui/material";
import Ticket_Icon from "../../resources/images/icons/ticket.png";

export default class MyButton extends Component {
  render() {
    return (
      <Button
        variant="contained"
        size="small"
        href={this.props.link}
        style={{
          background: `${this.props.bck_color}`,
          color: `${this.props.color}`,
        }}
      >
        <img src={Ticket_Icon} alt="Ticket_icon" className="iconImage" />
        {this.props.text}
      </Button>
    );
  }
}
