'use strict';
//color constructor taking in 4byte buffers
var Color = module.exports = function(buffer) {
  this.colorBuf = buffer;
  this.red = buffer.readUInt8(2);
  this.green = buffer.readUInt8(0);
  this.blue = buffer.readUInt8(1);
  this.alpha = buffer.readUInt8(3);

};

Color.prototype.write = function(){
  this.colorBuf.writeUInt8(this.red, 2);
  this.colorBuf.writeUInt8(this.green, 0);
  this.colorBuf.writeUInt8(this.alpha, 3);
  this.colorBuf.writeUInt8(this.blue, 1);
};

//Inverts colors
Color.prototype.invert = function () {
  255 - this.red;
  255 - this.blue;
  255 - this.green;
  this.write(); //overwrites the buffer with inverted colors
};

//Greyscale
Color.prototype.grayScale = function() {
  this.average = (this.red + this.blue + this.green)/3;
  this.red = this.average;
  this.blue = this.average;
  this.green = this.average;
  this.write(); //overwrites the buffer with greyscale
};

//Scale colors
Color.prototype.scale = function() {
  this.red *= .03;
  this.green = this.green;
  this.blue = this.blue;
  this.write();
};
