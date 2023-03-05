/* This is allowing us to create router in another file */
const express = require('express')
const router = express.Router()
const Controller = require('../controllers/Error.controller')

/* 404 */
router.use(Controller["404"].callback);

/* 500 */
router.use(Controller["500"].callback);

module.exports = router;