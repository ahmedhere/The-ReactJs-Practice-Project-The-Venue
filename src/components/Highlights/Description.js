import React, { Component } from "react";
import { Fade } from "react-reveal";

export default class Description extends Component {
  render() {
    return (
      <Fade>
        <div className="center_wrapper">
          <h2>Highlights</h2>
          <div className="highlight_description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            eligendi sed veniam earum sapiente reprehenderit. Quae eum odio
            sapiente! Molestiae sint perferendis illum quibusdam dolore iusto
            possimus voluptas provident natus! Nulla, deserunt labore maxime
            architecto quod velit nihil voluptate optio, culpa obcaecati
            provident quaerat earum autem pariatur blanditiis. Eius perspiciatis
            error maxime,
          </div>
        </div>
      </Fade>
    );
  }
}
