'use strict';

const fs = require('fs');
const Bitmap = require('../model/bitmap');


exports.readFile = function(bitmap, callback) {
  fs.readFile(`${__dirname}/../assets/${bitmap}.bmp`, function(err, data) {
    if(err) return callback (err);
    var bitmap = new Bitmap(data);
    callback(null, bitmap);
  });
};

exports.writeFile = function(outputType, bitmapName, bitmap, callback) {
  fs.writeFile(`${__dirname}/../assets/output-${outputType}-${bitmapName}.bmp`, bitmap.buffer,  function(err) {
    if(err) return callback (err);
    return 'successfully transformed bitmap';
  });
};
