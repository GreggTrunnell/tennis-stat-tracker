const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', ( req, res )=>{
    console.log( 'GET in router' );
    const searchQuery = req.query.q || '';
    const queryText = `SELECT players.last_name AS "last name", messages.from AS "from", messages.message AS "message"
                        FROM players
                        JOIN users ON players.id = users.player_id
                        JOIN messages ON messages.id = users.message_id
                        WHERE players.last_name ILIKE $1;`;
    const values =[`%${ searchQuery }%`];

    pool.query( queryText, values ).then(( results )=>{
        res.send( results.rows );
    }).catch(( err )=>{
        console.log( err );
        res.sendStatus( 400 );  
    })
})

//GET request for the store
router.get('/zustand', ( req, res )=>{
    console.log( 'GET in router/zustand' );
    const queryText = `SELECT *
                        FROM "messages"                      
                        ORDER BY id ASC;`;
    pool.query( queryText ).then(( results )=>{
        console.log("results in messages/zustand.router", results.rows)
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