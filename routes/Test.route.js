/* This is allowing us to create router in another file */
const express = require('express')
const router = express.Router()
const config = require('../config')
const Method = require('../controllers/Test.controller')

/* Test */

router.get('/api', Method['/api'].get.callback)

module.exports = router;