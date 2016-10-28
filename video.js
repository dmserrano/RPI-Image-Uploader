'use strict';

const { createReadStream } = require('fs');
const request = require('request');
const exec = require('child_process').exec;
/////////////////////////////////////////



console.log(new Date(), 'Video recording');
exec(`raspivid -w 640 -h 480 -o video.h264`, () => {
  createReadStream('video.h264')
  .pipe(request.post('http://10.0.0.168:3000/api/video/receive'));
  console.log(new Date(), 'Piping video stream to post route');
});
