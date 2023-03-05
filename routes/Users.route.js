const express = require('express')
const router = express.Router()
const {v4:uuidv4} = require('uuid')
const Controller = require('../controllers/Users.controller.js')

/* '/users' */
router.get('/users', Controller['/users'].get.callback)
router.post('/users', Controller['/users'].post.callback)

/* '/users/:id */
router.get('/users/:id', Controller['/users/:id'].get.callback)
router.patch('/users/:id', Controller['/users/:id'].patch.callback)
router.delete('/users/:id', Controller['/users/:id'].delete.callback)

module.exports = router;