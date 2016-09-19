'use strict';

const Color = require('../model/color.js');
const fs = require('fs');

var Bitmap = function(buf) {
  this.buf = buf;
  this.size = buf.readUInt32LE(2);
  this.offset = buf.readUInt32LE(10);
  this.colorArray = buf.slice(54, this.offset);
};

//altering the slice alters the buffer because they have the same memory
Bitmap.prototype.changeColor = function() {
  var slice, color;
  for(var i = 0; i < this.colorArray.length; i+=4) {
    slice = this.colorArray.slice(i, i + 4);
    color = new Color(slice);
    color.grayScale();
    color.invert();
    color.scale();
  }
  return this;
  //returns altered buffer
  //each slice created is 4 separate numbers that are 8 bits(1 byte) each
  //each color is one byte- so readUInt8 is used(reads 1 byte offset (n))
};



fs.writeFile('../assets/output.bmp', function(err){
  if ( err ) { throw err; }
  console.log('File written successfully');
  //Reads in original file
  fs.readFile('../assets/bitmap.bmp', function(err, data){
    if ( err ){ throw err;}
    console.log('Read in file');
    var bitmap = new Bitmap(data);
    return bitmap.changeColor();
  });
});
