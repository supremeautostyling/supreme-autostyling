import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import gallery from "../../assets/images/gallery/index.js";
import "./Gallery.css";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.galleryRef = React.createRef();
  }

  componentDidMount() {
    this.props.setRef(this.galleryRef.current);
  }

  render() {
    return (
      <section id="gallery" ref={this.galleryRef}>
        <h1>Gallery</h1>
        <ImageGallery
          autoPlay
          items={gallery.map((img) => ({ original: img, thumbnail: img }))}
          slideInterval={4000}
          slideDuration={1000}
        />
      </section>
    );
  }
}

export default Gallery;
