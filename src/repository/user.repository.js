const pool = require('../db')

async function createUserDB(name, surname, email, pwd) {
    const client = await pool.connect()

    const sql = 'INSERT INTO users(name, surname, email, pwd) VALUES($1, $2, $3, $4) RETURNING *'
    const { rows } = await client.query(sql, [name, surname, email, pwd])
    return rows
}

async function getAllUsersDB() {
    const client = await pool.connect()
    const sql = 'SELECT * FROM users'
    const { rows } = await client.query(sql)
    return rows
}

async function getUserByIdDB(id) {
    const client = await pool.connect()
    const sql = 'SELECT * FROM users WHERE id = $1'
    const { rows } = await client.query(sql, [id])

    return rows
}

async function updateUserByIdDB(id, name, surname, email, pwd) {
    const client = await pool.connect()
    const sql = 'UPDATE users SET name = $1, surname = $2, email = $3, pwd = $4 WHERE id = $5 RETURNING *'
    const { rows } = await client.query(sql, [name, surname, email, pwd, id])
    return rows
}

async function getAllUsersDB() {
    const client = await pool.connect()
    const sql = 'SELECT * FROM users'
    const { rows } = await client.query(sql)
    return rows
}

module.exports = {
    getAllUsersDB,
    createUserDB,
    getUserByIdDB,
    updateUserByIdDB
}