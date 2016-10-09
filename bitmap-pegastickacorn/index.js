'use strict';

const bitmapFileHelper = require('./lib/bitmap-file-helper');

bitmapFileHelper.readFile('bitmap', function(err, bitmap) {
  if (err) return console.error(err);
  bitmap.invertColor();
  bitmapFileHelper.writeFile('invert', 'bitmap', bitmap, function(err){
    console.error(err);
  });
});

bitmapFileHelper.readFile('bitmap', function(err, bitmap) {
  if (err) return console.error(err);
  bitmap.greyScaleColor();
  bitmapFileHelper.writeFile('greyscale', 'bitmap', bitmap, function(err){
    console.error(err);
  });
});

bitmapFileHelper.readFile('bitmap', function(err, bitmap) {
  if (err) return console.error(err);
  bitmap.scaleColor();
  bitmapFileHelper.writeFile('colorscale', 'bitmap', bitmap, function(err){
    console.error(err);
  });
});
