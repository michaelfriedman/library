/* eslint-disable comma-dangle */

const express = require('express');

const bookRouter = express.Router();

const books = [
  {
    title: 'Chaos Monkeys',
    genre: 'Biographies & Memoirs',
    author: 'Antonio Garcia Martinez',
    read: true
  },
  {
    title: 'The Tipping Point: How Little Things Can Make a Big Difference',
    genre: 'Non-Fiction',
    author: 'Malcolm Gladwell',
    read: true
  },
  {
    title: 'Way of the Peaceful Warrior',
    genre: 'Personal Development',
    author: 'Dan Millman',
    read: true
  },
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
    genre: 'Fantasy',
    author: 'J. K. Rowling',
    read: false
  },
  {
    title: 'The Hunger Games',
    genre: 'Fantasy',
    author: 'Suzanne Collins',
    read: false
  },
  {
    title: 'The Pelican Brief: A Novel',
    genre: 'Fiction: Legal Thriller',
    author: 'John Grisham',
    read: false
  },
];

bookRouter.route('/')
  .get((req, res) => {
    res.render('books', { title: 'Books', nav: [
      { Link: '/Books', Text: 'Books' },
      { Link: '/Authors', Text: 'Authors' }
    ],
      books });
  });

bookRouter.route('/single')
  .get((req, res) => {
    res.send('Hello Single Book');
  });

module.exports = bookRouter;
