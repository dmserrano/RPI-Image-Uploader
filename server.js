'use strict';

const express = require('express');
const app = express();
const { createReadStream } = require('fs');
const request = require('request');
const exec = require('child_process').exec;
/////////////////////////////////////////

let counter = 1;

const takePicture = () => {
  return new Promise((resolve, reject) => {
    exec(`raspistill -o ~/spy-on-fido/image1.jpg`);
    counter++;
    resolve();
  })
};

takePicture()
.then(() => {
  setTimeout(() => {
  console.log('Read stream now')
  createReadStream('image1.jpg')
  .pipe(request.post('http://10.0.0.168:3000/api/image/new'));
  }, 6000);
})
.catch((err) => {
  console.log(err);
});


app.listen(3000, () => console.log(`Currently listening on port 3000`));
