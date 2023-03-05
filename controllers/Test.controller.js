const config = require('../config')

module.exports = {
  ['/api']: {
    get: {
      method: 'GET',
      path: '/api',
      callback: (req, res, next) => {
        res.json([
          {id: 1, name: 'Ruffle'},
          {id: 2, name: 'Souffle'},
          {id: 3, name: 'Anime'},
          {id: 4, name: 'Manga'}
        ])
      }
      /* config End */
    }

  }

}