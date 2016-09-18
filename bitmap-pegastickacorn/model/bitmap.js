'use strict';

const Bitmap = module.exports = function (buf) {
  this.buffer = buf;
  this.size = buf.readUInt32LE(2);
  this.offset = buf.readUInt32LE(10);
  this.colorArray = buf.slice(this.offset, this.size);
  // console.log(this.colorArray.length);
};

Bitmap.prototype.invertColor = function() {
  for(var i = 0; i < this.colorArray.length; i++) {
    this.colorArray[i] = Math.abs(this.colorArray[i] - 255);
  }
};

Bitmap.prototype.grayScaleColor = function () {
  for(var i = 0; i< this.colorArray.length; i++) {
    
  }
};
