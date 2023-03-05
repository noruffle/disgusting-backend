/* This is allowing us to create router in another file */
const express = require('express')
const router = express.Router()
const Controller = require('../controllers/Specific.cotroller')

/* '/calc' */
router.get('/calc', Controller['/calc'].get.callback)
router.post('/calc', Controller['/calc'].post.callback)

module.exports = router;