'use strict';

const bitmapFileHelper = require('./lib/bitmap-file-helper.js');


bitmapFileHelper.readFile(function(err, bitmap) {
  console.log(bitmap.changeColor());

  // do transform
  bitmapFileHelper.writeFile(bitmap, function(err, data){

  });
});

// bitmap.changeColor();
