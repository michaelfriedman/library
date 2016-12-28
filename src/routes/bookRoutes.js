/* eslint-disable comma-dangle */

const express = require('express');

const bookRouter = express.Router();

const router = (nav) => {
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
      res.render('bookListView', { title: 'Books', nav, books });
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const id = req.params.id;

      res.render('bookView', { title: 'Books', nav, book: books[id] });
    });

  return bookRouter;
};

module.exports = router;
