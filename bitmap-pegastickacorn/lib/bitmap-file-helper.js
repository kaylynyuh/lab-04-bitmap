'use strict';

const fs = require('fs');
const Bitmap = require('../model/bitmap');

module.exports = exports = {};

exports.readFile = function(bitmap, callback) {
  fs.readFile(`${__dirname}/../assets/${bitmap}.bmp`, function(err, data) {
    if(err) return callback (err);
    var bitmap = new Bitmap(data);
    callback(null, bitmap);
  });
};

exports.writeFile = function(bitmapName, bitmap, callback) {
  fs.writeFile(`${__dirname}/../assets/output-${bitmapName}.bmp`, bitmap.buffer,  function(err, data) {
    if(err) return callback (err);
    callback(null, data);
  });
};
