const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res)=>{
    let winnerStats = req.body;
    console.log('Adding winner in router', winnerStats);
    let queryText= `INSERT INTO player_stats ("points")
                    VALUES ( $1 );`;
    
    pool.query(queryText, winnerStats)
    .then(result=>{
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error POST router`, error)
      res.sendStatus(500);
    })
  })

  module.exports = router;