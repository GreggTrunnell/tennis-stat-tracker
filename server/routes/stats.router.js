const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM players ORDER BY id LIMIT 10;';
  pool.query(queryText)
  .then(result => {     
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting todos in router', error);
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