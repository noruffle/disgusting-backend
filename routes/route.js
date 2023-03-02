/* This is allowing us to create router in another file */
const express = require('express')
const router = express.Router()

const Title = 'disgusting -';

/** Routes */
/* Main page */
router.get('/', (req, res, next) => {
  res.render('home', {
    title: `${Title} Home`,
  });
});

router.get('/anime', (req, res, next) => {
  res.render('con-anime', {
    title: `${Title} Anime corner`
  });
})

router.get('/anime/watch', (req, res, next) => {
  res.render('con-watch', {
    title: `${Title} Watching anime`
  });
});

router.get('/manga', (req, res, next) => {
  res.render('con-manga', {
    title: `${Title} Manga corner`
  });
});

router.get('/manga/read', (req, res, next) => {
  res.render('con-read', {
    title: `${Title} Reading manga`
  });
});

/* Calculator page */
router.get('/calc', (req, res) => {
  res.render('con-calc', {
    title: `${Title} Calculator`
})
});

router.get('path', (req, res) => {

});


/* Test */

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