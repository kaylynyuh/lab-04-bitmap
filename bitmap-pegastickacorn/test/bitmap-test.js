'use strict';

const fs = require('fs');
const expect = require('chai').expect;

const Bitmap = require('../model/bitmap.js');
const Color = require('../model/color.js');

// TESTING BITMAP CONSTRUCTOR
describe('testing bitmap.js module', function() {
  before( done => {
    fs.readFile(`${__dirname}/test-bitmap.bmp`, (err, data) => {
      if (err) throw err;
      this.testBitmap = new Bitmap(data);
      done();
    });
  });

  describe('testing bitmap constructor', () => {
    it('should return buffer size', () =>  {
      expect(this.testBitmap.size).to.equal(11078);
    });
    it('should return offset', () =>  {
      expect(this.testBitmap.offset).to.equal(1078);
    });
    it('should return colorArray length', () =>  {
      expect(this.testBitmap.colorArray.length).to.equal(1024);
    });
    it('should return pixelArray length', () =>  {
      expect(this.testBitmap.pixelArray.length).to.equal(10000);
    });
  });
});

// TESTING COLOR CONSTRUCTOR
describe('testing color.js module', function() {
  before( () => {
    this.testBuffer = new Buffer(4);
    this.testColor = new Color(this.testBuffer);
    console.log(this.testColor);
  });

  describe('testing color constructor', () => {
    it('should return the RBG value for red', () => {
      expect(this.testColor.red).to.equal(this.testBuffer[2]);
    });
    it('should return the RBG value for green', () => {
      expect(this.testColor.green).to.equal(this.testBuffer[1]);
    });
    it('should return the RBG value for blue', () => {
      expect(this.testColor.blue).to.equal(this.testBuffer[0]);
    });
    it('should return alpha value', () => {
      expect(this.testColor.alpha).to.equal(this.testBuffer[3]);
    });
  });

});
