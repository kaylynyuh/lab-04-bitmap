'use strict';

const bitmapFileHelper = require('./lib/bitmap-file-helper');


bitmapFileHelper.readFile('finger-print', function(err, bitmap) {
  // console.log('hello!');
  // bitmap.changeColor();
  // bitmap.colorLocator();
  // do transform
  bitmapFileHelper.writeFile('finger-print', bitmap, function(err, data){
    // console.log(bitmap);
  });
});

// bitmap.changeColor();
