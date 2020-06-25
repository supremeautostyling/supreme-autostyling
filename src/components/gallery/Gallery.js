import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

import Slider from "react-slick";
import PhotoGallery from "./PhotoGallery.js";

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

  /*thumbRender = (e) => {
    console.log(e);
  };*/

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const showGallery = "gallery"; // slider || gallery || photo
    return (
      <section id="gallery" ref={this.galleryRef}>
        <h1>Gallery</h1>

        {showGallery === "gallery" ? (
          <ImageGallery
            autoPlay
            //showThumbnails={false}
            //showPlayButton={false}
            //showNav={false}
            //showFullscreenButton={false}
            items={gallery.map((img) => {
              let name = img.slice(img.lastIndexOf("/") + 1).split(".")[0];
              return {
                original: img,
                thumbnail: img,
                originalAlt: name.split(/(?=[A-Z])/).join(" "),
                thumbnailAlt: name.split(/(?=[A-Z])/).join(" "),
                //renderThumbInner: this.thumbRender,
              };
            })}
            slideInterval={4000}
            slideDuration={1000}
          />
        ) : showGallery === "photo" ? (
          <PhotoGallery />
        ) : (
          <Slider {...settings}>
            {gallery.map((img, idx) => (
              <div key={"gallery" + idx}>
                <img src={img} alt="" className="" />
              </div>
            ))}
          </Slider>
        )}
      </section>
    );
  }
}

export default Gallery;

/*
  items={gallery.map((img) => ({
              original: img,
              thumbnail: img,
              originalAlt: "",
              thumbnailAlt: "",
            }))}
*/
