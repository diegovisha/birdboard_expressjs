const express = require('express');

const port = 3000;

const server = express();

server.get('/', (req, res) => {
  res.send('Hello world!');
});

server.listen(port, () => {
  console.log(`Birdboard API is running on ${port}`);
});
