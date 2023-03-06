const config = require("../config");
const Anime = require("../models/anime.model");

module.exports = {
  ["/"]: {
    get: {
      method: "GET",
      path: "/",
      callback: (req, res, next) => {
        res.render("home", {
          title: config.title + "Home",
        });
      },
    },

    post: {
      method: "POST",
      path: "/",
      callback: (req, res, next) => {
        console.log(req.body.title);
      },
    },

    put: {
      method: "PUT",
      path: "/",
      callback: (req, res, next) => {},
    },

    patch: {
      method: "PATCH",
      path: "/",
      callback: (req, res, next) => {},
    },

    delete: {
      method: "DELETE",
      path: "/",
      callback: (req, res, next) => {},
    },
  },

  ["/anime"]: {
    get: {
      method: "GET",
      path: "/anime",
      callback: (req, res, next) => {
        res.render("con-anime", {
          title: config.title + "Anime",
        });
      },
    },

    post: {
      method: "POST",
      path: "/anime",
      callback: (req, res, next) => {
        /* Output data of POST-request */
        console.log(req.body);
        /* All properties */
        const data = {
          title: req.body.title,
          japantitle: req.body.japantitle,
          poster: req.body.poster,
          status: req.body.status,
          premiered: req.body.premiered,
          studio: req.body.studio,
          description: req.body.description,
          genres: {
            genre: req.body.genre,
          }
        };

        const add = new Anime({data}, (err) => {
          if (err) handleError(err);
        })

      },
    },

    put: {
      method: "PUT",
      path: "/anime",
      callback: (req, res, next) => {},
    },

    patch: {
      method: "PATCH",
      path: "/anime",
      callback: (req, res, next) => {},
    },

    delete: {
      method: "DELETE",
      path: "/anime",
      callback: (req, res, next) => {},
    },
  },

  ["/anime/watch"]: {
    get: {
      method: "GET",
      path: "/anime/watch",
      callback: (req, res, next) => {
        res.render("con-watch", {
          title: config.title + "Watching anime",
        });
      },
    },

    post: {
      method: "POST",
      path: "/anime/watch",
      callback: (req, res, next) => {},
    },

    put: {
      method: "PUT",
      path: "/anime/watch",
      callback: (req, res, next) => {},
    },

    patch: {
      method: "PATCH",
      path: "/anime/watch",
      callback: (req, res, next) => {},
    },

    delete: {
      method: "DELETE",
      path: "/anime/watch",
      callback: (req, res, next) => {},
    },
  },

  ["/manga"]: {
    get: {
      method: "GET",
      path: "/manga",
      callback: (req, res, next) => {
        res.render("con-manga", {
          title: config.title + "Manga",
        });
      },
    },

    post: {
      method: "POST",
      path: "/manga",
      callback: (req, res, next) => {},
    },

    put: {
      method: "PUT",
      path: "/manga",
      callback: (req, res, next) => {},
    },

    patch: {
      method: "PATCH",
      path: "/manga",
      callback: (req, res, next) => {},
    },

    delete: {
      method: "DELETE",
      path: "/manga",
      callback: (req, res, next) => {},
    },
  },

  ["/manga/read"]: {
    get: {
      method: "GET",
      path: "/manga/read",
      callback: (req, res, next) => {
        res.render("con-read", {
          title: config.title + "Reading manga",
        });
      },
    },

    post: {
      method: "POST",
      path: "/manga/read",
      callback: (req, res, next) => {},
    },

    put: {
      method: "PUT",
      path: "/manga/read",
      callback: (req, res, next) => {},
    },

    patch: {
      method: "PATCH",
      path: "/manga/read",
      callback: (req, res, next) => {},
    },

    delete: {
      method: "DELETE",
      path: "/manga/read",
      callback: (req, res, next) => {},
    },
  },
};
