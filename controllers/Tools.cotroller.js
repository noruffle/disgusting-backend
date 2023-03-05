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
        const num1 = Number(req.body.num1)
        const num2 = Number(req.body.num2)
        console.log(`First operand: ${num1}\nSecond operand: ${num2}`)
      
        function Calculator(...operands) {
          return operands.reduce((a, b) => a + b, 0);
        }
      
        let result = Calculator(num1, num2)
        console.log(`Result: ${result}`)
      
        res.write(`\nResult: ${result}`)
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