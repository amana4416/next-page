const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

//this post route will allow authenticated users to to
//add/leave notes on books in their bookshelf
router.post('/', rejectUnauthenticated, (req, res) => {
    const newNote = req.body;
    // console.log('here is our new note info:', newNote);
    const sqlQuery = `
        INSERT INTO "user_notes"
        ("book_id", "note", "user_id")
            VALUES
            ($1, $2, $3);
    `;
    const sqlValues = [newNote.book_id, newNote.note, newNote.user_id];
    pool.query(sqlQuery, sqlValues)
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error in /api/notes POST', error);
            res.sendStatus(500);
        })
  });


router.get('/', (req, res) => {
  // GET route code here
});



module.exports = router;