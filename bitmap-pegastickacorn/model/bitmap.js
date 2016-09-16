'use strict';

const Bitmap = module.exports = function (buf) {
  this.buffer = buf;
  this.size = buf.readUInt32LE(2);
  this.offset = buf.readUInt32LE(10);
  this.colorArray = buf.slice(54, this.offset);
};

Bitmap.prototype.changeColor = function() {
  for(var i = 0; i < this.colorArray.length; i+= 4) {
    var
  };
};
