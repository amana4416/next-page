const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config()

//google books api
const google_books_api = process.env.google_books_api


router.get('/:query', (req, res) => {
    const search = req.params.query;
    console.log('here is what we are searching:', search);
    //sending axios get request to api
    axios({
        method: 'GET',
        url: `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${google_books_api}`
    })
    .then((response) => {
        //send search results back to saga
        console.log(response.data.items);
        res.send(response.data.items);
    })
    .catch((error) => {
        console.log('error in /api/search GET:', error);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;