'use strict';

const bitmapFileHelper = require('./lib/bitmap-file-helper');


bitmapFileHelper.readFile(function(err, bitmap) {
  // console.log('hello!');
  bitmap.changeColor(err, bitmap);
  // do transform
  bitmapFileHelper.writeFile(bitmap, function(err, data){
    // console.log(bitmap);
  });
});

// bitmap.changeColor();
