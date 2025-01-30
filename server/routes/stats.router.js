const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//TODO make query more explicit 
router.get('/', (req, res) => {
  const searchQuery = req.query.q || '';
  const queryText = `
    SELECT * 
    FROM players 
    WHERE first_name ILIKE $1 
    OR last_name ILIKE $1 
    OR playing_hand ILIKE $1
    OR racquet_brand ILIKE $1
    OR country ILIKE $1;
  `;
  const values = [`%${searchQuery}%`];

  pool.query(queryText, values)
    .then((result) => {
      console.log('Query successful:', result.rows);
      res.json(result.rows); 
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res)=>{
    let playerData = req.body;
    console.log('Adding todo POST in router', playerData);
    let queryText= `INSERT INTO players ("first_name","last_name","playing_hand","racquet_brand","country")
    VALUES ( $1, $2, $3, $4, $5 );`;
    pool.query(queryText, [ playerData.first_name, playerData.last_name, playerData.playing_hand, playerData.racquet_brand, playerData.country ])
    .then(result=>{
        res.sendStatus(201);
    })
    .catch(error => {
        console.log(`Error POST router`, error)
        res.sendStatus(500);
    })
});

//! some functionality but need to correct queryText
router.put('/', ( req, res )=>{
    let matchStatsData = req.body;
    console.log("data from PUT", matchStatsData )
    let queryText = `INSERT INTO player_stats ("points","ace","fh_winners","bh_winners","double_faults","fh_losers", "bh_losers")
    VALUES ( $1, $2, $3, $4, $5, $6, $7 );`;
    pool.query( queryText, [ match_stats.points, match_stats.ace, match_stats.fh_winners, match_stats.bh_winners, match_stats.double_faults, match_stats.fh_losers, match_stats.bh_losers ])
    .then( result => {
      res.sendStatus( 201 )
    })
    .catch( error => {
      console.log("error im put router", error)
      res.sendStatus( 500 )
    })
})
module.exports = router;
