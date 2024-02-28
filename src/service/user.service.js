const {
    getAllUsersDB,
    createUserDB,
    getUserByIdDB
} = require('../repository/user.repository')

async function createUser(name, surname, email, pwd) {
    const user = await createUserDB(name, surname, email, pwd)
    return user
}

async function getAllUsers() {
    const data = await getAllUsersDB()
    return data
}

async function getUserById(id) {
    const data = await getUserByIdDB(id)
    return data
}
async function getAllUsers() {
    const data = await getAllUsersDB()
    return data
}
async function getAllUsers() {
    const data = await getAllUsersDB()
    return data
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById
}