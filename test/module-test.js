
'use strict';

//Require in the bitmap.js file to test
const Bitmap = require('../model/bitmap.js');
//Require in chai to make use of expect
const expect = require('chai').expect;

//testing the bitmap.js module
describe('testing bitmap.js module', function(){
  describe('testing Bitmap()', function(){
    //testing if there is an object
    
    //testing bitmap constructor
    it('size should equal "1365240"', function() {
      expect(this.bitmap.size).to.equal(1365240);
    });
    it('offset should equal "1078"', function() {
      expect(bitmap.offset).to.equal(1078);
    });
    it('should return "colorArray"', function() {
      expect(bitmap.colorArray.length).to.equal(1024);
    });
    //testing changeColor method
    //1. Should slice array properly
    //2. Should set indexes 0, 1, and 2 to different
    //colors and change 1
    //3. should output altered bitmap

    //testing color constructor
    //1. should invert
    //2. should greyscale
    //3. should scale
  });

});

//testing the main program module
