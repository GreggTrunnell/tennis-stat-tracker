const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  const searchQuery = req.query.q || ''; // Default to empty string
  const queryText = `
    SELECT * 
    FROM players 
    WHERE first_name LIKE $1 
    OR last_name LIKE $1 
    OR playing_hand LIKE $1
    OR raquet_brand LIKE $1;
  `;
  const values = [`%${searchQuery}%`];

  pool.query(queryText, values)
    .then((result) => {
      console.log('Query successful:', result.rows);
      res.json(result.rows); // Send rows back as JSON
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.sendStatus(500);
    });
});

  router.post('/', (req, res)=>{
    let playerData = req.body;
    console.log('Adding todo POST in router', playerData);
    let queryText= `INSERT INTO players ("first_name","last_name","playing_hand","raquet_brand")
    VALUES ( $1, $2, $3, $4 );`
    pool.query(queryText, [ playerData.first_name, playerData.last_name, playerData.playing_hand, playerData.raquet_brand])
    .then(result=>{
        res.sendStatus(201);
    })
    .catch(error => {
        console.log(`Error POST router`, error)
        res.sendStatus(500);
    })
})
module.exports = router;