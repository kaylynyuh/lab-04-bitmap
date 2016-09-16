'use strict';

const fs = require('fs');
const buf = new Buffer(fs.readFileSync(`${__dirname}/assets/finger-print.bmp`), 'utf-8');

//read 32 bit data from buffer, offest 2
//gives file size in bytes- 1365240
//console.log(buf.readUInt32LE(2));

//location of the start of pixel array- 1078
var pixArrayOffset = buf.readUInt32LE(10);

//color array
var colorArray = buf.slice(54, pixArrayOffset);

for (var i = 0; i <= colorArray.length; i+=4) {
  //every 4 bytes, change the colorArray
  colorArray.slice(i, i + 4);
  
  //put them back into the array
}
console.log(colorArray);



//TESTS
//1. should get a correct bitmap
//2. should return correct array of values
//3. should find the correct location of the pixel array
//4. should return the correct array of colors
//5. should return correct file size
