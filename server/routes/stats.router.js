const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  const searchQuery = req.query.q || '';
  const queryText = `
    SELECT players.first_name AS "first_name", 
    players.last_name AS "last_name", 
    players.playing_hand AS "playing_hand", 
    players.racquet_brand AS "racquet_brand", 
    players.country AS "country"
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
})
module.exports = router;
