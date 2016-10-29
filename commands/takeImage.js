'use strict';

const exec = require('child_process').exec;
const { createReadStream } = require('fs');
const request = require('request');
const { red, cyan } = require('chalk');
/////////////////////////////////////////


module.exports = () => {
  console.log(cyan(Date().slice(16, -15)), 'Capturing image');
  exec(`raspistill -o ~/spy-on-fido/images/image.jpg -q 5`, () => {
    createReadStream('images/image.jpg')
    .pipe(request.post('http://192.168.1.20:3000/api/image/new'));
    console.log(cyan(Date().slice(16, -15)), 'Piping image stream to post route');
  });
};
