'use strict';

const https = require('https');
const { createReadStream } = require('fs');
/////////////////////////////////////////

let postData = {};

const options = {
  hostname: 'spyonfido.herokuapp.com',
  // port: 3000,
  path: '/api/image/new',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': '2000'
  }
};


const req = https.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});


createReadStream(`./dice.png`, { highWaterMark: 700 })
.on('data', (buffer) => {
  console.log("Buffer length", Buffer.byteLength(buffer));
  postData.encodedImg = buffer;
  postData.timeStamp = new Date();
  req.write(JSON.stringify(postData));
})
.on('end', () => {
  req.end();
  // }, 50);
});
