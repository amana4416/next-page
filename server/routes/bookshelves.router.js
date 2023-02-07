const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//this get route will get fetch the books in bookshelf 1
//bookshelf 1 is the 'currently reading' bookshelf
router.get('/currently', (req, res) => {
  console.log('fetching books you are currently reading');
  //selecting books marked as 'currently reading' from the database
  const sqlQuery = `
    SELECT * FROM "user_library"
        WHERE "bookshelf" = 1;
  `;
  pool.query(sqlQuery)
    .then((response) => {
        console.log('here are the books you are currently reading', response.rows);
        res.send(response.rows);
    })
    .catch((error) => {
        console.log('error in /api/bookshelves/currently', error);
        res.sendStatus(500);
    })
});

//this get route will get fetch the books in bookshelf 2
//bookshelf 2 is the 'want to read' bookshelf
router.get('/want', (req, res) => {
    console.log('fetching books you want to read');
    //selecting books marked as 'want to read' from the database
    const sqlQuery = `
      SELECT * FROM "user_library"
          WHERE "bookshelf" = 2;
    `;
    pool.query(sqlQuery)
      .then((response) => {
          console.log('here are the books you want to read', response.rows);
          res.send(response.rows);
      })
      .catch((error) => {
          console.log('error in /api/bookshelves/want', error);
          res.sendStatus(500);
      })
  });




router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;