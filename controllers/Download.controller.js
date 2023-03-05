const config = require('../config');

module.exports = {
  ['/download']: {
    get: {
      method: 'GET',
      path: '/download',
      callback: (req, res, next) => {
        res.render('home', {
          title: 'Download',
        })
      }
    },

    post: {
      method: 'POST',
      path: '/download',
      callback: (req, res, next) => {

      }
    },

    put: {
      method: 'PUT',
      path: '/download',
      callback: (req, res, next) => {

      }
    },

    patch: {
      method: 'PATCH',
      path: '/download',
      callback: (req, res, next) => {

      }
    },

    delete: {
      method: 'DELETE',
      path: '/download',
      callback: (req, res, next) => {

      }
    }
  },
}