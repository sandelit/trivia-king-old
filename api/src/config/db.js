const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'abc123',
    database: 'triviaking',
    host: 'localhost',
    port: 5432,
})

module.exports = pool
