'use strict';

const fs = require('fs');

fs.readFile(`${__dirname}/../assets/finger-print.bmp`, (err, data) => {
  if(err) throw err;
  console.log(data);
});
