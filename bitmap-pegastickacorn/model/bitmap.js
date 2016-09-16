'use strict';

const Bitmap = module.exports = function (buf) {
  this.buffer = buf;
  this.size = buf.readUInt32LE(2);
  this.offset = buf.readUInt32LE(10);
  this.colorArray = buf.slice(54, this.offset);
};

Bitmap.prototype.changeColor = function() {
  console.log('color array', this.colorArray);
  console.log('color array length', this.colorArray.length)

  // console.log('whole buffer', this.buffer.toString('hex'));
  // console.log('colorArray before', this.colorArray.toString('hex'));
  for(var i = 0; i < this.colorArray.length; i++) {
    this.colorArray.readIntLE(i, 1);
    this.colorArray.writeIntLE(0, i, 1);
    if((i + 3) % 4){
      this.colorArray.writeIntLE(255, i, 1);
    }
    //this copies from the colorArray(source), to the buffer(target) starting at the target[54] and the whole source[0, source.length]
    // this.colorArray.copy(this.buffer, 54);
    // console.log('colorArray after', this.colorArray.toString('hex'));
  }
};

//if we want to invert colors, later, we will probably need to set up an inverted buffer:
// this.invertedArray.writeIntLE(255 - originalColor, i, 1);
