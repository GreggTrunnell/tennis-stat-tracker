const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.put('/', (req, res)=>{
    let { points, aces, fhWinners, bhWinners, totalWinners } = req.body;
    console.log('Adding winner in router', req.body);
    let queryText= `UPDATE "player_stats"
                    SET "aces" = ($1)
                    WHERE id = 1;`;
    
    pool.query(queryText, [aces])
    .then(result=>{
        console.log(req.body)
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error put router`, error)
      res.sendStatus(500);
    })
  })

  module.exports = router;