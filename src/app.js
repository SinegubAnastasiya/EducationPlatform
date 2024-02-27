const express = require('express')
const bodyParser = require('body-parser')
const routeUser = require('./controller/user.controller')

const app = express()

app.use(bodyParser.json())

app.use('/user', routeUser)
// app.use('/course', routeCourse)
// app.use('/api', routeApi)

app.use((er, req, res, _next) => res.send(er.message))

module.exports = { app }