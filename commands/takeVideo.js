'use strict';

const { createReadStream } = require('fs');
const request = require('request');
const { red, cyan } = require('chalk');
const exec = require('child_process').exec;
/////////////////////////////////////////


module.exports = () => {
  console.log(cyan(Date().slice(16, -15)), 'Video recording');
  exec(`raspivid -w 640 -h 480 -o videos/video.h264`, () => {
    createReadStream('videos/video.h264')
    .pipe(request.post('http://192.168.1.20:3000/api/video/receive'));
    console.log(cyan(Date().slice(16, -15)), 'Piping video stream to post route');
  });
};
