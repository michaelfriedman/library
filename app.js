/* eslint-disable no-console */

const express = require('express');

const handlebars = require('express-handlebars');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');
app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Hello from render.', list: ['a', 'b'] });
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
