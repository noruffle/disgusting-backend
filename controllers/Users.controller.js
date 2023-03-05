const users = [];

module.exports = {

  ['/users']: {
    get: {
      method: 'GET',
      path: '/users',
      callback: (req, res, next) => {
        res.send(users)
      }
    },

    post: {
      method: 'POST',
      path: '/users',
      callback: (req, res, next) => {

        /* Get new User from POST-request */
        const newUser = req.body;

        /* UID */
        const UID = uuidv4();

        /* Add UID to new User */
        const userUID = {...newUser, id: UID}

        /* Add userUID to DATABASE */
        users.push(userUID)

        res.send(`Added new user ${newUser.name}`)

      }
    },

    put: {
      method: 'PUT',
      path: '/users',
      callback: (req, res, next) => {

      }
    },

    patch: {
      method: 'PATCH',
      path: '/users',
      callback: (req, res, next) => {

      }
    },

    delete: {
      method: 'DELETE',
      path: '/users',
      callback: (req, res, next) => {

      }
    }
  },

  ['/users/:id']: {
    get: {
      method: 'GET',
      path: '/users/:id',
      callback: (req, res, next) => {
            
        /* Log of ID */
        console.log(req.params.id)
            
        const {id} = req.params;
            
        const foundUser = users.find(user => user.id === id)
            
        res.send(foundUser)
            
            
      }
    },

    post: {
      method: 'POST',
      path: '/users/:id',
      callback: (req, res, next) => {

      }
    },

    put: {
      method: 'PUT',
      path: '/users/:id',
      callback: (req, res, next) => {

      }
    },

    patch: {
      method: 'PATCH',
      path: '/users/:id',
      callback: (req, res, next) => {

        /* Here we get id parameter */
        const {id} = req.params;

        /* Here we create variable "user", that do search among users 
        and searching the user with id, who we enter to the path */
        const user = users.find((user) => user.id === id)

        /*  */
        const {name, role, age} = req.body;

        if (name) {
          user.name = name;
        }
      
        if (role) {
          user.role = role;
        }
      
        if (age) {
          user.age = age;
        }
      
        /*  */
        res.send(`User with ${id} was updated successfuly!`)
      
      }
    },

    delete: {
      method: 'DELETE',
      path: '/users/:id',
      callback: (req, res, next) => {

        /*  */
        const {id} = req.params;

        /*  */
        users = users.filter((user) => user.id !== id);

        res.send(`User with ${id} was deleted successfuly.`)

      }
    }
  },


}
