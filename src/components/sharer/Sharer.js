import React, { Component } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  PinterestIcon,
  TwitterIcon,
} from "react-share";

import "./Sharer.css";

class Sharer extends Component {
  render() {
    return (
      <div>
        <EmailShareButton>
          <EmailIcon />
        </EmailShareButton>
        <FacebookShareButton>
          <FacebookIcon />
        </FacebookShareButton>
        <PinterestShareButton>
          <PinterestIcon />
        </PinterestShareButton>
        <TwitterShareButton>
          <TwitterIcon />
        </TwitterShareButton>
      </div>
    );
  }
}

export default Sharer;
