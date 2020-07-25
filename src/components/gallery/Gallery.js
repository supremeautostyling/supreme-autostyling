import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import gallery from "../../assets/images/gallery/index.js";
import "./Gallery.css";

const imgGalleryProps = {
  autoPlay: true,
  items: gallery.map((img) => {
    let name = img.slice(img.lastIndexOf("/") + 1).split(".")[0];
    return {
      original: img,
      thumbnail: img,
      originalAlt: name.split(/(?=[A-Z])/).join(" "),
      thumbnailAlt: name.split(/(?=[A-Z])/).join(" "),
    };
  }),
  slideInterval: 4000,
  slideDuration: 1000,
};

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

        <ImageGallery {...imgGalleryProps} />
      </section>
    );
  }
}

export default Gallery;
