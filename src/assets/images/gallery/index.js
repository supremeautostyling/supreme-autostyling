import thumbnails from "./thumbnails/index.js";

const backFloor1 = require("./backFloor1.jpg");
const backFloor2 = require("./backFloor2.jpg");
const lensFix = require("./lensFix.JPG");
const matClose1 = require("./matClose1.JPG");
const matClose2 = require("./matClose2.jpg");
const matClose3 = require("./matClose3.JPG");
const rimClose = require("./rimClose.JPG");
const seats1 = require("./seats1.JPG");
const seats2 = require("./seats2.JPG");
const sideFloor1 = require("./sideFloor1.JPG");
const sideFloor2 = require("./sideFloor2.JPG");
const sideFloor3 = require("./sideFloor3.JPG");
const sideFloor4 = require("./sideFloor4.JPG");
//const whiteTruckExt = require("./whiteTruckExt.jpg");
//const carExt1 = require("./carExt1.JPG");

/*
  export const backFloor1 = require("./backFloor1.jpg");
  export const backFloor2 = require("./backFloor2.jpg");
  export const lensFix = require("./lensFix.JPG");
  export const matClose1 = require("./matClose1.JPG");
  export const matClose2 = require("./matClose2.jpg");
  export const matClose3 = require("./matClose3.JPG");
  export const rimClose = require("./rimClose.JPG");
  export const seats1 = require("./seats1.JPG");
  export const seats2 = require("./seats2.JPG");
  export const sideFloor1 = require("./sideFloor1.JPG");
  export const sideFloor2 = require("./sideFloor2.JPG");
  export const sideFloor3 = require("./sideFloor3.JPG");
  export const sideFloor4 = require("./sideFloor4.JPG");
  export const whiteTruckExt = require("./whiteTruckExt.jpg");
  export const carExt1 = require("./carExt1.JPG");
*/

const gallery = [
  { original: backFloor1, thumbnail: thumbnails[0] },
  { original: backFloor2, thumbnail: thumbnails[1] },
  { original: lensFix, thumbnail: thumbnails[2] },
  { original: matClose1, thumbnail: thumbnails[3] },
  { original: matClose2, thumbnail: thumbnails[4] },
  { original: matClose3, thumbnail: thumbnails[5] },
  { original: rimClose, thumbnail: thumbnails[6] },
  { original: seats1, thumbnail: thumbnails[7] },
  { original: seats2, thumbnail: thumbnails[8] },
  { original: sideFloor1, thumbnail: thumbnails[9] },
  { original: sideFloor2, thumbnail: thumbnails[10] },
  { original: sideFloor3, thumbnail: thumbnails[11] },
  { original: sideFloor4, thumbnail: thumbnails[12] },
  //{src: whiteTruckExt, thumbnail: thumbnails[13], },
  //{src: carExt1, thumbnail: thumbnails[14], },
];

export default gallery;
