'use strict';

const Bitmap = module.exports = function (buf) {
  this.buffer = buf;
  // console.log(this.buffer.length);
  this.size = buf.readUInt32LE(2);
  // console.log(this.size);
  this.offset = buf.readUInt32LE(10);
  // console.log(this.offset);
  this.colorArray = buf.slice(54, this.offset);
  // console.log(this.colorArray.length);
  this.pixelArray = buf.slice(this.offset, this.size);
  console.log(this.pixelArray[57]);
};

Bitmap.prototype.invertColor = function() {
  for(var i = 0; i < this.pixelArray.length; i++) {
    this.pixelArray[i] = Math.abs(this.pixelArray[i] - 255);
  }
};

Bitmap.prototype.colorLocator = function () {
  console.log(this.pixelArray);
  for(var i = 0; i < this.pixelArray.length; i++) {
    this.pixelArray[i];
  }
  console.log(this.pixelArray);
};

Bitmap.prototype.changeColor = function() {
  console.log('color array', this.pixelArray);
  console.log('color array length', this.pixelArray.length);
  var i = 0;
  // console.log('whole buffer', this.buffer.toString('hex'));
  console.log('pixelArray before', this.pixelArray.toString('hex'));
  if(i < this.pixelArray.length) {
    i++;
    // console.log('value of i:', i);
    this.pixelArray.readIntLE(i, 1);
    // console.log('what we are reading:', this.pixelArray.readIntLE(i, 1));
    this.pixelArray.writeIntLE(2, i, 1);
    // console.log('what we are writing:', this.pixelArray.writeIntLE(2, i, 1));
    if((i + 3)% 4){
      this.pixelArray.writeIntLE(255, i, 1);
      // console.log('what we are overwriting with:', this.pixelArray.writeIntLE(255, i, 1));
    }
  }
  //this copies from the pixelArray(source), to the buffer(target) starting at the target[54] and the whole source[0, source.length]
  // this.pixelArray.copy(this.buffer, 54);
  console.log('pixelArray after', this.pixelArray.toString('hex'));
};

//if we want to invert colors, later, we will probably need to set up an inverted buffer:
// this.invertedArray.writeIntLE(255 - originalColor, i, 1);
