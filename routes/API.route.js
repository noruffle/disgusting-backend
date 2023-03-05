/* This is allowing us to create router in another file */
const express = require('express')
const router = express.Router()
const config = require('../config')
const Controller = require('../controllers/API.controller')

/* Test */

router.get('/api', Controller['/api'].get.callback)

module.exports = router;