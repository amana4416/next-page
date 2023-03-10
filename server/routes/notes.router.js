const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

//this get route will allow authenticated users to see 
//the notes they have already left on books
router.get('/:id', rejectUnauthenticated, (req, res) => {
    const user_id = req.user.id;
    const book_id = req.params.id;
    console.log
    const sqlQuery = `
        SELECT * FROM "user_notes"
            WHERE "book_id" = $1;
    `;
    const sqlValues = [book_id];
    pool.query(sqlQuery, sqlValues)
        .then((response) => {
            console.log('here is your previouse note', response.rows);
            res.send(response.rows);
        })
        .catch((error) => {
            console.log('error in /api/notes/ GET', error);
            res.sendStatus(500);
        })
});


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


//this delete route will delete a not from the details page (and the "user_notes" table in the db)
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const currentUser = req.user.id
    const noteToDelete = req.params.id;
    console.log('noteToDelete', noteToDelete)
    const sqlQuery = `
        DELETE FROM "user_notes"
            WHERE "id" = $1;
    `;
    const sqlValues = [noteToDelete];
    pool.query(sqlQuery, sqlValues)
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error in /api/notes DELETE', error);
            res.sendStatus(500);
        })
})


module.exports = router;