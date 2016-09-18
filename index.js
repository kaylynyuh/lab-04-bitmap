'use strict';
//sets up events
const Event = require('events');
const ee = new Event;
//adds file read and write
const helper = require('./lib/bitmap-file-helper.js');

//on has 2 parameters:
//name of event listening for and function
ee.on('read file', function(){
  helper.readBuffer();
});

ee.on('write to file', function() {
  helper.writeBuffer();
});

ee.on('detect error', function(){
  console.log('Error');
});

//Emit fires the events
ee.emit('read file');
ee.emit('change colors');
ee.emit('write to file');
