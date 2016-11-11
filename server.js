'use strict';

const express = require('express');
const app = express();
const takeImage = require('./commands/takeImage.js');
const takeVideo = require('./commands/takeVideo.js');
const pb_takeImage = require('./commands/pb_takeImage.js');
const pb_takeVideo = require('./commands/pb_takeVideo.js');
const { red, cyan } = require('chalk');
const { readdirSync } = require('fs');
/////////////////////////////////////////


console.log("Test test", readdirSync('photoBooth/images').slice(-1));

app.set('view engine', 'pug');
app.use(express.static('photoBooth'));

app.get('/', (req, res) => {
  res.render('index');
});


app.post('/rpi/image/single', takeImage);
app.post('/rpi/video/static', takeVideo);
app.get('/pb/image', pb_takeImage);
app.get('/pb/video', pb_takeVideo);


app.use(( err, { url }, res, next) => {
  const timeStamp = Date().slice(16, -15);
  console.error(
    `${red(timeStamp)} [${red(`${url}`)}]`
  );
  console.error(err.stack);
});


app.listen(3000, () => {
  console.log(cyan(Date().slice(16, -15)), `Currently listening on port 3000`);
});
