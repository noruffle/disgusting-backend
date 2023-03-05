const config = require('../config')

module.exports = {
  ['/calc']: {
    get: {
      method: 'GET',
      path: '/calc',
      callback: (req, res, next) => {
        res.render('con-calc', {
          title: config.title + 'Calculator',
        })
      }
    },

    post: {
      method: 'POST',
      path: '/calc',
      callback: (req, res, next) => {
        console.log(req.body)
  
        const num1 = Number(req.body.num1)
        const num2 = Number(req.body.num2)
        const sum = (a, b) => a + b
        console.log(num1, num2)
        const answer = sum(num1, num2)
        console.log(answer)
        res.write(`<h1>Your sum is: ${answer}</h1>`)
        res.send()
      }
    },

    put: {
      method: 'PUT',
      path: '/calc',
      callback: (req, res, next) => {

      }
    },

    patch: {
      method: 'PATCH',
      path: '/calc',
      callback: (req, res, next) => {

      }
    },

    delete: {
      method: 'DELETE',
      path: '/calc',
      callback: (req, res, next) => {

      }
    }
  },
  
}