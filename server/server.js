const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const statsRouter = require('./routes/stats.router.js')

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use( '/api/stats', statsRouter );
app.use( '/api/search', statsRouter );

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});