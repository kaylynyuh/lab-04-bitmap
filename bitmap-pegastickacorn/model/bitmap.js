'use strict';

const Bitmap = module.exports = function (buf) {
  this.buffer = buf;
  this.size = buf.readUInt32LE(2);
  this.offset = buf.readUInt32LE(10);
  this.colorArray = buf.slice(this.offset, this.size);
};

Bitmap.prototype.invertColor = function() {
  for(var i = 0; i < this.colorArray.length; i++) {
    this.colorArray[i] = Math.abs(this.colorArray[i] - 255);
  }
};

Bitmap.prototype.grayScaleColor = function () {
  // for(var i = 0; i< this.colorArray.length; i++) {
  //   this.colorArray[i]
  // }
  this.colorArray = this.colorArray.map(function (newArray) {
    console.log('HERE IN DA MAPS');
    var makeGray = (this.colorArray[0] + this.colorArray[1] + this.colorArray[2]) /3;

  })
};
