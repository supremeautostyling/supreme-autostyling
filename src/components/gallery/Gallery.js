import React from "react";
import ImageGallery from "react-image-gallery";
import gallery from "../../assets/images/gallery/index.js";

function Gallery(props) {
  return (
    <section id="gallery">
      <h1>Gallery</h1>
      <ImageGallery
        slideInterval={4000}
        slideDuration={1000}
        items={gallery}
        ref={props.galleryRef}
      />
    </section>
  );
}

export default Gallery;
