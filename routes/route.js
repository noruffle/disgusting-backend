/* This is allowing us to create router in another file */
const express = require('express')
const router = express.Router()


/** Routes */
/* Main page */
router.get('/', (req, res, next) => {
  res.render('home', {
    title: 'Home',
  });
});

router.get('/anime', (req, res, next) => {
  res.render('con-anime', {
    title: 'Anime corner'
  });
})

router.get('/anime/watch', (req, res, next) => {
  res.render('con-watch', {
    title: 'Watching anime'
  });
});

router.get('/manga', (req, res, next) => {
  res.render('con-manga', {
    title: 'Manga corner'
  });
});

router.get('/manga/read', (req, res, next) => {
  res.render('con-read', {
    title: 'Reading manga'
  });
});

router.get('/api/products', (req, res, next) => {
  res.json([[
    {
      id: 1,
      name: 'Ruffle'
    },
    {
      id: 2,
      name: 'Souffle'
    },
    {
      id: 3,
      name: 'Anime'
    },
    {
      id: 4,
      name: 'Manga'
    }
  ]])
})

module.exports = router;