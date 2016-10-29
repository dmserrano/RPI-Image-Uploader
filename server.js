'use strict';

const express = require('express');
const app = express();
const takeImage = require('./commands/takeImage.js');
const takeVideo = require('./commands/takeVideo.js');
const { red, cyan } = require('chalk');
/////////////////////////////////////////

// takeImage();
// takeVideo();

app.use(( err, { url }, res, next) => {
  const timeStamp = Date().slice(16, -15);
  console.error(
    `${red(timeStamp)} [${red(`${url}`)}]`
  );
  console.error(err.stack);
})


app.listen(3000, () => {
  console.log(cyan(Date().slice(16, -15)), `Currently listening on port 3000`);
});
