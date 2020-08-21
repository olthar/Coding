var express = require('express');
var router = express.Router();
const Book = require('../models').Book;

/* Handler function to wrap each route. */
function asyncHandler(cb){
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch(error){
    res.sendStatus(404);
    
    }
  }
}

/* get /books - Shows the full list of books. */
router.get('/', asyncHandler(async (req, res) => {
  const books = await Book.findAll({ order: [["createdAt", "DESC"]] });
  res.render("books/index", {books} );
}));

// get /books/new - Shows the create new book form.
router.get('/new', (req, res) => {
  res.render("books/new-book", { book: {}, title: "New Book" });
});

// post /books/new - Posts a new book to the database.
router.post('/', asyncHandler(async (req, res) => {
  let book;
  try {
    book = await Book.create(req.body);
    res.redirect("/books/" + book.id + "/edit");
  } catch (error) {
    if(error.name === "SequelizeValidationError") { // checking the error
      book = await Book.build(req.body);
      res.render("books/new-book", { book, errors: error.errors, title: "New Book" })
    } else {
      throw error; 
    }  
  }
}));

// get /books/:id - Shows book detail.
router.get("/:id", asyncHandler(async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if(book) {
    res.render("books/update-book", { book, title: book.title });  
  } else {
    // const err = new Error("Book not found");
    // res.locals.message = err.message;
    // res.render("/error", {message: error})
    res.redirect("/error" );
  }
})); 

// get /books/:id - Edit book detail form.
router.get("/:id/edit", asyncHandler(async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if(book) {
    res.render("books/update-book", { book, title: book.title });  
  } else {
    res.sendStatus(404);
    // throw error;
  }
})); 


// post /books/:id - Updates book info in the database.
router.post('/:id/edit', asyncHandler(async (req, res) => {
  let book;
  try {
    book = await Book.findByPk(req.params.id);
    if(book) {
      await book.update(req.body);
      res.redirect("/books"); 
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    if(error.name === "SequelizeValidationError") {
      book = await Book.build(req.body);
      book.id = req.params.id; // make sure correct book gets updated
      res.render("books/update-book", { book, errors: error.errors, title: "Edit Book" })
    } else {
      throw error;
    }
  }
}));

/* Delete article form. */
// router.get('/:id/delete', asyncHandler(async (req, res) => {
//   const book = await Book.findByPk(req.params.id);
//   if(book) {
//     res.render("books/", { book, title: "Delete Article" });
//   } else {
//     res.sendStatus(404);
//   }
// }));

// post /books/:id/delete - Deletes a book. Careful, this can’t be undone. It can be helpful to create a new “test” book to test deleting.
router.post('/:id/delete', asyncHandler(async (req ,res) => {
  const book = await Book.findByPk(req.params.id);
  if(book) {
    await book.destroy();
    res.redirect("/books");
  } else {
    res.sendStatus(404);
  }
}));



module.exports = router;
