/* This is allowing us to create router in another file */
const express = require('express')
const router = express.Router()

/* Downloads */
router.get('/download', (req, res) => {
  res.download(__dirname + '/test.html')
})

module.exports = router;