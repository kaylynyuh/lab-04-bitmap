'use strict';

const bitmapFileHelper = require('./lib/bitmap-file-helper.js');


bitmapFileHelper.readFile(function(err, bitmap) {
  // console.log('hello!');
  bitmap.changeColor();
  // do transform
  bitmapFileHelper.writeFile(bitmap, function(err, data){
    // console.log(bitmap);
  });
});

// bitmap.changeColor();
