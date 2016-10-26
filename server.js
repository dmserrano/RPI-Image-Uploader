'use strict';

const express = require('express');
const app = express();
const { createReadStream } = require('fs');
const request = require('request');
const takeSinglePic = require('./commands/takeSinglePic.js');
/////////////////////////////////////////


takeSinglePic()
.then(() => {
  setTimeout(() => {
  console.log('Sending image to server');
  createReadStream('img/image.jpg')
  .pipe(request.post('http://10.0.0.168:3000/api/image/new'));
  }, 6000);
})
.catch((err) => {
  console.log(err);
});


app.listen(3000, () => console.log(`Currently listening on port 3000`));
