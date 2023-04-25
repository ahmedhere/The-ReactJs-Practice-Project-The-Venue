import React, { Component } from "react";
import { scroller } from "react-scroll";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default class SideDrawer extends Component {
  scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
    });
    this.props.onClose(false);
  };
  render() {
    return (
      <Drawer
        anchor="right"
        open={this.props.open}
        onClose={() => this.props.onClose(false)}
      >
        <List component="nav">
          <ListItem button onClick={() => this.scrollToElement("featured")}>
            Event starts in
          </ListItem>
          <ListItem button onClick={() => this.scrollToElement("Venue")}>
            Venue Info
          </ListItem>
          <ListItem button onClick={() => this.scrollToElement("Highlights")}>
            Highlights
          </ListItem>
          <ListItem button onClick={() => this.scrollToElement("Pricing")}>
            Pricing
          </ListItem>
          <ListItem button onClick={() => this.scrollToElement("Location")}>
            Location
          </ListItem>
        </List>
      </Drawer>
    );
  }
}
