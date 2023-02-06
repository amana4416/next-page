const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config()

//nyt books api 
const nyt_api = process.env.nyt_api


router.get('/', (req, res) => {
    console.log('fetching current best sellers');
    //sending axios get request to api
    axios({
        method: 'GET',
        url: `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${nyt_api}`
    })
    .then((response) => {
        console.log('here are our best sellers', response.data.results);
        res.send(response.data.results);
    })
    .catch((error) => {
        console.log('error in /api/bestsellers')
    })
});


module.exports = router;