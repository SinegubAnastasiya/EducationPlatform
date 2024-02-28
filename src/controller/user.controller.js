const express = require('express')
const route = express.Router()
const { buildResponse } = require('../helper/buildResponse')
const {
    createUser,
    getAllUsers,
    getUserById, 
    updateUserById
} = require('../service/user.service')

route.post('/', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body
        const data = await createUser(name, surname, email, pwd)
        buildResponse(res, 200, data)
    } catch (error) {
        buildResponse(res, 404, error.message)
    }
})

route.get('/', async (req, res) => {
    try {
        const data = await getAllUsers()
        buildResponse(res, 200, data)
    } catch (error) {
        buildResponse(res, 404, error.message)
    }
})

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await getUserById(id)
        buildResponse(res, 200, data)
    } catch (error) {
        buildResponse(res, 404, error.message)
    }
})

route.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { name, surname, email, pwd } = req.body
        const data = await updateUserById(id, name, surname, email, pwd)
        buildResponse(res, 200, data)
    } catch (error) {
        buildResponse(res, 404, error.message)
    }
})

route.delete('/', async (req, res) => {
    try {
        const data = await getAllUsers()
        buildResponse(res, 200, data)
    } catch (error) {
        buildResponse(res, 404, error.message)
    }
})

module.exports = route