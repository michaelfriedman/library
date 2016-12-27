const express = require('express');

const app = express();

const port = 5000;

app.use(express.static('public'));

app.use(express.static('src/views'));

app.get('/', (req, res) => {
  res.send('Hello world.');
});

app.get('/books', (req, res) => {
  res.send('Hello books.');
});

app.listen(5000, (err) => {
  console.log(`Running server on port: ${port}`);
});
