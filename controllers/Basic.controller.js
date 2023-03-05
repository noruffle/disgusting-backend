const config = require('../config');

module.exports = {
  ['/']: {
    get: {
      method: 'GET',
      path: '/',
      callback: (req, res, next) => {
        res.render('home', {
          title: config.title + 'Home',
        })
      }
    },

    post: {
      method: 'POST',
      path: '/',
      callback: (req, res, next) => {

      }
    },

    put: {
      method: 'PUT',
      path: '/',
      callback: (req, res, next) => {

      }
    },

    patch: {
      method: 'PATCH',
      path: '/',
      callback: (req, res, next) => {

      }
    },

    delete: {
      method: 'DELETE',
      path: '/',
      callback: (req, res, next) => {

      }
    }
  },

  ['/anime']: {
    get: {
      method: 'GET',
      path: '/anime',
      callback: (req, res, next) => {
        res.render('con-anime', {
          title: config.title + 'Anime',
        })
      }
    },

    post: {
      method: 'POST',
      path: '/anime',
      callback: (req, res, next) => {

      }
    },

    put: {
      method: 'PUT',
      path: '/anime',
      callback: (req, res, next) => {

      }
    },

    patch: {
      method: 'PATCH',
      path: '/anime',
      callback: (req, res, next) => {

      }
    },

    delete: {
      method: 'DELETE',
      path: '/anime',
      callback: (req, res, next) => {

      }
    }
  },

  ['/anime/watch']: {
    get: {
      method: 'GET',
      path: '/anime/watch',
      callback: (req, res, next) => {
        res.render('con-watch', {
          title: config.title + 'Watching anime',

        })
      }
    },

    post: {
      method: 'POST',
      path: '/anime/watch',
      callback: (req, res, next) => {

      }
    },

    put: {
      method: 'PUT',
      path: '/anime/watch',
      callback: (req, res, next) => {

      }
    },

    patch: {
      method: 'PATCH',
      path: '/anime/watch',
      callback: (req, res, next) => {

      }
    },

    delete: {
      method: 'DELETE',
      path: '/anime/watch',
      callback: (req, res, next) => {

      }
    }
  },

  ['/manga']: {
    get: {
      method: 'GET',
      path: '/manga',
      callback: (req, res, next) => {
        res.render('con-manga', {
          title: config.title + 'Manga',
        })
      }
    },

    post: {
      method: 'POST',
      path: '/manga',
      callback: (req, res, next) => {

      }
    },

    put: {
      method: 'PUT',
      path: '/manga',
      callback: (req, res, next) => {

      }
    },

    patch: {
      method: 'PATCH',
      path: '/manga',
      callback: (req, res, next) => {

      }
    },

    delete: {
      method: 'DELETE',
      path: '/manga',
      callback: (req, res, next) => {

      }
    }
  },

  ['/manga/read']: {
    get: {
      method: 'GET',
      path: '/manga/read',
      callback: (req, res, next) => {
        res.render('con-read', {
          title: config.title + 'Reading manga',

        })
      }
    },

    post: {
      method: 'POST',
      path: '/manga/read',
      callback: (req, res, next) => {

      }
    },

    put: {
      method: 'PUT',
      path: '/manga/read',
      callback: (req, res, next) => {

      }
    },

    patch: {
      method: 'PATCH',
      path: '/manga/read',
      callback: (req, res, next) => {

      }
    },

    delete: {
      method: 'DELETE',
      path: '/manga/read',
      callback: (req, res, next) => {

      }
    }
  },

}