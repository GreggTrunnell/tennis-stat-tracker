const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'gregg_tennis'
});

module.exports = pool;
