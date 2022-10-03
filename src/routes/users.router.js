const router = require('express').Router()

usersServices = require('../services/users.services')

router.get('/users', usersServices.getUsers)

router.post('/users', usersServices.createNewUser)

router.get('/users/:id', usersServices.getOneUser)

module.exports = router


