'use strict';

const { createReadStream } = require('fs');
const request = require('request');
/////////////////////////////////////////

const imageStream = createReadStream('dice.png');

imageStream
.pipe(request.post('http://localhost:3000/api/image/new'));
