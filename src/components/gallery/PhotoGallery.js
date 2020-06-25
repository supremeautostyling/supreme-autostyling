import React from "react";
import Gallery from "react-photo-gallery";
import imgs from "../../assets/images/gallery/index.js";

function PhotoGallery() {
  const threeByFour = [...imgs.slice(0, imgs.length - 2)].map((img) => ({
    src: img,
    width: 4,
    height: 3,
  }));
  const fourByThree = [...imgs.slice(-2)].map((img) => ({ src: img, width: 3, height: 4 }));
  return <Gallery photos={[...threeByFour, ...fourByThree]} />;
}

export default PhotoGallery;
