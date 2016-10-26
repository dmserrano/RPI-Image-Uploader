'use strict';

const exec = require('child_process').exec;
/////////////////////////////////////////

module.exports = () => {
  return new Promise((resolve, reject) => {
    exec(`raspistill -o ~/spy-on-fido/img/image.jpg -q 5`);
    resolve();
  })
};
