/* This is allowing us to create router in another file */
const express = require('express')
const router = express.Router()

const app = express();
app.use(express.static(__dirname + '/public/content'));

/** Errors */
/* 404 */
router.use((req, res, next) => {
  res.status(404);
  res.render('err-404', {
    title: 'Error 404'
  });
});

/* 500 */
router.use((err, req, res, next) => {
  res.status(500);
  res.render('err-500', {
    title: 'Error 500'
  });
});

module.exports = router;