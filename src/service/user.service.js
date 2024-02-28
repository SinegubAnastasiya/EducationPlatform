const {
    getAllUsersDB,
    createUserDB,
    getUserByIdDB,
    updateUserByIdDB,
    deleteUserDB
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
async function updateUserById(id, name, surname, email, pwd) {
    const data = await updateUserByIdDB(id, name, surname, email, pwd)
    return data
}
async function deleteUser(id) {
    const data = await deleteUserDB(id)
    return data
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUser
}