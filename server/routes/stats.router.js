const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM player_stats ORDER BY id;';
    pool.query(queryText)
    .then(result => {     
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting todos in router', error);
      res.sendStatus(500);
    });
  });
module.exports = router;