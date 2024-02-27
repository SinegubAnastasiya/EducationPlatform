const express = require('express')
const route = express.Router()
const { buildResponse } = require('../helper/buildResponse')
const {
    createUser,
    getAllUsers
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

module.exports = route