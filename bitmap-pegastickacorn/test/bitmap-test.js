'use strict';

//Require in the bitmap.js file to test
//const Bitmap = require('../model/bitmap.js');
const bitmapFileHelper = require('/../lib/bitmap-file-helper.js');
//Require in chai to make use of expect
const expect = require('chai').expect;

//testing the bitmap.js module
describe('testing bitmap.js module', function(){
  describe('testing Bitmap()', function(){
   //testing bitmap constructor
    it('size should equal "1365240"', function() {
      expect(bitmapFileHelper.bitmap.size).to.equal(1365240);
    });
    it('offset should equal "1078"', function() {
      expect(bitmapFileHelper.bitmap.offset).to.equal(1078);
    });
    it('should return "1024"', function() {
      expect(bitmapFileHelper.bitmap.colorArray.length).to.equal(1024);
    });
  });
});
