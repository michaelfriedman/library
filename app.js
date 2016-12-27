/* eslint-disable no-console */

const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/books', (req, res) => {
  res.send('Hello books.');
});

app.listen(port, (err) => {
  if (err) {
    console.error(`The following error occurred: ${err}`);
  }
  console.log(`Running server on port: ${port}`);
});
