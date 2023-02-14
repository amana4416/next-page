const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

//this post route will allow authenticated users to to
//add/leave notes on books in their bookshelf
router.post('/', rejectUnauthenticated, (req, res) => {
    
  });


router.get('/', (req, res) => {
  // GET route code here
});



module.exports = router;