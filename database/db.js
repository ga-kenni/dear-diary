const pg = require('pg')

const db = new pg.Pool({
    database: 'dear_diary',
})

module.exports = db