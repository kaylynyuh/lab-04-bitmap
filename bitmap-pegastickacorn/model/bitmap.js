'use strict';

const Color = require(`${__dirname}/color`);

const Bitmap = module.exports = function (buf) {
  this.buffer = buf;
  this.size = buf.readUInt32LE(2);
  this.offset = buf.readUInt32LE(10);
  this.colorArray = buf.slice(54, this.offset);
  this.pixelArray = buf.slice(this.offset, this.size);
};

Bitmap.prototype.invertColor = function() {
  var slice, color;
  for(var i = 0; i < this.colorArray.length; i+=4) {
    slice = this.colorArray.slice(i, i + 4);
    color = new Color(slice);
    color.invert();
  }
  return this;
  //returns altered buffer
  //each slice created is 4 separate numbers that are 8 bits(1 byte) each
  //each color is one byte- so readUInt8 is used(reads 1 byte offset (n))
};

Bitmap.prototype.greyScaleColor = function() {
  var slice, color;
  for(var i = 0; i < this.colorArray.length; i+=4) {
    slice = this.colorArray.slice(i, i + 4);
    color = new Color(slice);
    color.grayScale();
  }
  return this;
  //returns altered buffer
  //each slice created is 4 separate numbers that are 8 bits(1 byte) each
  //each color is one byte- so readUInt8 is used(reads 1 byte offset (n))
};

Bitmap.prototype.scaleColor = function() {
  var slice, color;
  for(var i = 0; i < this.colorArray.length; i+=4) {
    slice = this.colorArray.slice(i, i + 4);
    color = new Color(slice);
    color.scale();
  }
  return this;
  //returns altered buffer
  //each slice created is 4 separate numbers that are 8 bits(1 byte) each
  //each color is one byte- so readUInt8 is used(reads 1 byte offset (n))
};
