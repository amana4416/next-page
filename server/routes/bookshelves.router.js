const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

//this get route will get fetch the last 6 books in bookshelf 1
//bookshelf 1 is the 'currently reading' bookshelf
router.get('/currently/last', rejectUnauthenticated, (req, res) => {
  console.log('fetching books you are currently reading');
  const currentUser = req.user.id
  //sql query checks to see if the user id is the same as the one who added the book to the table
  //that way users are only shown their own libraries, not everyones
  //then it will grab the last 6 books that are in bookshelf 1
  const sqlQuery = `
    SELECT * FROM "user_library"
      WHERE "user_id" = $1
      AND "bookshelf" = 1
      ORDER BY "id" DESC
        FETCH FIRST 6 ROWS ONLY;
  `;
  const sqlValue = [currentUser];
  pool.query(sqlQuery, sqlValue)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log('error in /api/bookshelves/currently/last', error);
      res.sendStatus(500);
    })
})


//this get route will get fetch the last 6 books in bookshelf 2
//bookshelf 2 is the 'want to read' bookshelf
router.get('/want/last', rejectUnauthenticated, (req, res) => {
  const currentUser = req.user.id
  //sql query checks to see if the user id is the same as the one who added the book to the table
  //that way users are only shown their own libraries, not everyones
  //then it will grab the last 6 books that are in bookshelf 2
  const sqlQuery = `
    SELECT * FROM "user_library"
      WHERE "user_id" = $1
      AND "bookshelf" = 2
      ORDER BY "id" DESC
        FETCH FIRST 6 ROWS ONLY;
  `;
  const sqlValue = [currentUser];
  pool.query(sqlQuery, sqlValue)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log('error in /api/bookshelves/want/last', error);
      res.sendStatus(500);
    })
  
})

//this get route will get fetch the last 6 books in bookshelf 3
//bookshelf 3 is the 'finished reading' bookshelf
router.get('/finished/last', rejectUnauthenticated, (req, res) => {
  console.log('fetching books you finished reading');
  //sql query checks to see if the user id is the same as the one who added the book to the table
  //that way users are only shown their own libraries, not everyones
  //then it will grab the last 6 books that are in bookshelf 2
  const currentUser = req.user.id
  const sqlQuery = `
    SELECT * FROM "user_library"
      WHERE "user_id" = $1
      AND "bookshelf" = 3
      ORDER BY "id" DESC
        FETCH FIRST 6 ROWS ONLY;
  `;
  const sqlValue = [currentUser];
  pool.query(sqlQuery, sqlValue)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log('error in /api/bookshelves/finished/last', error);
      res.sendStatus(500);
    })
})


//this route will get all books in bookshelf 1
//bookshelf 1 is the 'currently reading' bookshelf
router.get('/currently', rejectUnauthenticated, (req, res) => {
  console.log('fetching books you are currently reading');
  const currentUser = req.user.id
  //sql query checks to see if the user id is the same as the one who added the book to the table
  //that way users are only shown their own libraries, not everyones
  //then it will grab all the books that are in bookshelf 1
  const sqlQuery = `
    SELECT * FROM "user_library"
      WHERE "user_id" = $1
      AND "bookshelf" = 1
      ORDER BY "id" DESC;
  `;
  const sqlValue = [currentUser];
  pool.query(sqlQuery, sqlValue)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log('error in /api/bookshelves/currently', error);
      res.sendStatus(500);
    })
});


//this route will get all books in bookshelf 2
//bookshelf 2 is the 'want to read' bookshelf
router.get('/want', rejectUnauthenticated, (req, res) => {
  console.log('fetching books you want to read');
  const currentUser = req.user.id
  //sql query checks to see if the user id is the same as the one who added the book to the table
  //that way users are only shown their own libraries, not everyones
  //then it will grab all the books that are in bookshelf 2
  const sqlQuery = `
    SELECT * FROM "user_library"
      WHERE "user_id" = $1
      AND "bookshelf" = 2
      ORDER BY "id" DESC;
  `;
  const sqlValue = [currentUser];
  pool.query(sqlQuery, sqlValue)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log('error in /api/bookshelves/want', error);
      res.sendStatus(500);
    })
});

//this route will get all books in bookshelf 3
//bookshelf 3 is the finished reading bookshelf
router.get('/finished', rejectUnauthenticated, (req, res) => {
  console.log('fetching books you finished');
  const currentUser = req.user.id
  //sql query checks to see if the user id is the same as the one who added the book to the table
  //that way users are only shown their own libraries, not everyones
  //then it will grab all the books that are in bookshelf 3
  const sqlQuery = `
    SELECT * FROM "user_library"
      WHERE "user_id" = $1
      AND "bookshelf" = 1]3
      ORDER BY "id" DESC;
  `;
  const sqlValue = [currentUser];
  pool.query(sqlQuery, sqlValue)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log('error in /api/bookshelves/currently', error);
      res.sendStatus(500);
    })
});

//this get route will fetch book details for the book with the id we click on
router.get('/:id', (req, res) => {
  console.log('book id we want details for:', req.params);
  const bookId = req.params.id;
  const sqlQuery = `
    SELECT * FROM "user_library"
      WHERE "id" = $1;
  `;
  const sqlValue = [bookId];
  pool.query(sqlQuery, sqlValue)
    .then((response) => {
      console.log('here are the book details you requested:', response.rows[0]);
      res.send(response.rows[0]);
    })
    .catch((error) => {
      console.log('error in /api/bookshelves/:id', error);
      res.sendStatus(500);
    })
  
});

//making it so only authenticated users are able to add to their bookshelves
router.post('/', rejectUnauthenticated, (req, res) => {
  // console.log('here is our user', req.user.id);
  // console.log('here is the book we are adding',req.body);
  const newBook = req.body;
  const sqlQuery = `
    INSERT INTO "user_library" 
    ("book_isbn", "book_title", "book_author", "book_cover", "book_description", "bookshelf", "user_id")
      VALUES
      ($1, $2, $3, $4, $5, $6, $7);
  `
  const sqlValues = [newBook.book_isbn, newBook.book_title, newBook.book_author, newBook.book_cover, newBook.book_description, newBook.bookshelf, newBook.user_id];
  pool.query(sqlQuery, sqlValues)
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('error in /api/bookshelves POST', error);
      res.sendStatus(500);
    })
});

//this delete route will delete book from bookshelf (ie "user_library" table in database)
router.delete('/:id', (req, res) => {
  const bookToDelete = req.params.id;
  const sqlQuery = `
    DELETE FROM "user_library"
      WHERE "id" = $1;
  `;
  const sqlValue = [bookToDelete];
  pool.query(sqlQuery, sqlValue)
    .then((response) => {
      console.log('deleted book with id', bookToDelete, 'from the database');
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('error in /api/bookshelves DELETE', error);
      res.sendStatus(500);
    })
})

//this put route will change a books bookshelf
router.put('/:id', (req, res) => {
  const bookToUpdate = req.params.id;
  const newBookshelf = req.body.bookshelf;
  console.log('new bookshelf', newBookshelf);
  const sqlQuery = `
    UPDATE "user_library"
      SET "bookshelf" = $1
      WHERE "id" = $2;
  `;
  const sqlValues = [newBookshelf, bookToUpdate];
  pool.query(sqlQuery, sqlValues)
    .then((response) => {
      console.log('moved book with id', bookToUpdate, 'to bookshelf', newBookshelf);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('error in /api/bookshelves PUT', error);
      res.sendStatus(500);
    })
})


module.exports = router;