const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', ( req, res )=>{
    console.log( 'GET in router' );
    const queryText = `SELECT * FROM "messages" ORDER BY id ASC;`;
    pool.query( queryText ).then(( results )=>{
        res.send( results.rows );
    }).catch(( err )=>{
        console.log( err );
        res.sendStatus( 400 );  
    })
})

router.post('/', ( req, res )=>{
    console.log( 'POST  in router', req.body, req.query );
    const queryText =  `INSERT INTO "messages" ("from","message")
VALUES ( $1, $2 );`;
    const values = [ req.body.from, req.body.message ]
    pool.query( queryText, values ).then(( results )=>{
        res.sendStatus( 201  );
    }).catch(( err )=>{
        console.log( err );
        res.sendStatus( 400 );
    })
})








module.exports = router;