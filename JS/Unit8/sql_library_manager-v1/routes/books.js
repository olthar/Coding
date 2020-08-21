const express = require('express');
const router = express.Router();
const Book = require('../models').Book;

function asyncHandler(cb){
    return async(req, res, next) => {
      try {
        await cb(req, res, next)
      } catch(error){
      res.sendStatus(404);
      }
    }
  }

// get /books - Shows the full list of books.
router.get('/books', asyncHandler(async (req, res) => {
    const books = await Book.findAll();
    // console.log(books)
    res.render("books/index");
  }));
  


// get /books/new - Shows the create new book form.
// post /books/new - Posts a new book to the database.
// get /books/:id - Shows book detail form.
// post /books/:id - Updates book info in the database.
// post /books/:id/delete - Deletes a book. Careful, this can’t be undone. It can be helpful to create a new “test” book to test deleting.


module.exports = router;