/* This is allowing us to create router in another file */
const express = require('express')
const router = express.Router()
const https = require('https');
const config = require('../config');
const Controller = require('../controllers/Basic.controller');

// Home
router.get('/', Controller['/'].get.callback);

// Anime
router.get('/anime', Controller['/anime'].get.callback);
router.get('/anime/watch', Controller['/anime/watch'].get.callback);

// Manga
router.get('/manga', Controller['/manga'].get.callback);
router.get('/manga/read', Controller['/manga/read'].get.callback);


module.exports = router;


