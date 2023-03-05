/* This is allowing us to create router in another file */
const express = require('express')
const router = express.Router()
const Controller = require('../controllers/Download.controller')

/* Downloads */
router.get('/download', Controller['/download'].get.callback)

module.exports = router;