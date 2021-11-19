const db = require('../database/db.js')

const Challenges = {
    getAll: () => {
        const sql = 'SELECT * FROM entries'
        return db
            .query(sql)
            .then(dbRes => dbRes.rows)
    },

    getAllForUser: (user_id) => {
        const sql = 'SELECT * FROM entries WHERE user_id = $1'
        return db
            .query(sql, [user_id])
            .then(dbRes => dbRes.rows)
    },

    get: (id) => {
        const sql = 'SELECT * FROM entries WHERE id = $1'
        return db
            .query(sql, [id])
            .then(dbRes => dbRes.rows[0])
    },

    create: (userID, title, content) => {
        const sql = `
            INSERT INTO entries(user_id, title, content) 
            VALUES($1, $2, $3)
            RETURNING *
            `
        return db
            .query(sql, [userID, title, content])
            .then(dbRes => dbRes.rows[0])
    },

    delete: (id) => {
        const sql = `
            DELETE FROM entries 
            WHERE id = $1
            `
        return db.query(sql, [id])
    }
}

module.exports = Challenges