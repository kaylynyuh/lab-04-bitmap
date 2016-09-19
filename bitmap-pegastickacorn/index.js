'use strict';

const bitmapFileHelper = require('./lib/bitmap-file-helper');


bitmapFileHelper.readFile('bitmap', function(err, bitmap) {
  bitmap.invertColor();
  bitmapFileHelper.writeFile('invert', 'bitmap', bitmap, function(err, data){
  });
});

bitmapFileHelper.readFile('bitmap', function(err, bitmap) {
  bitmap.greyScaleColor();
  bitmapFileHelper.writeFile('colorscale', 'bitmap', bitmap, function(err, data){
  });
});

bitmapFileHelper.readFile('bitmap', function(err, bitmap) {
  bitmap.scaleColor();
  bitmapFileHelper.writeFile('greyscale', 'bitmap', bitmap, function(err, data){
  });
});
