const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//this get route will get fetch the books in bookshelf 1
//bookshelf 1 is the 'currently reading' bookshelf
router.get('/', (req, res) => {
  
});




router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;