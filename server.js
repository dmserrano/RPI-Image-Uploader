'use strict';

const http = require('http');

const postData = JSON.stringify({
      ownerId: '12345',
      ownerName: 'greg2g',
      timeStamp: new Date(),
      _id: '12345' + '2n4n6k',
      encodedImg: 'apples'
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/image/new',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
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

// write data to request body
req.write(postData);
req.end();
