'use strict';

const bitmapFileHelper = require('./lib/bitmap-file-helper.js');


bitmapFileHelper.readFile(function(err, bitmap) {
  bitmap.invertColor();

  bitmapFileHelper.writeFile(bitmap, function(err, data){

  });
});
