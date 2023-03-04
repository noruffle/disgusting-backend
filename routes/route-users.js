const express = require('express')
const router = express.Router()
const {v4:uuidv4} = require('uuid')

/* DATABASE */
const users = []

// Get users
router.get('/users', (req, res, next) => {
  res.send(users)
})

// Get individual user
router.get('/users/:id', (req, res, next) => {
  
  /* Log of ID */
  console.log(req.params.id)
  
  const {id} = req.params;

  const foundUser = users.find(user => user.id === id)
  
  res.send(foundUser)

})

// Create user
router.post('/users', (req, res, next) => {

  /* Get new User from POST-request */
  const newUser = req.body;

  /* UID */
  const UID = uuidv4();

  /* Add UID to new User */
  const userUID = {...newUser, id: UID}

  /* Add userUID to DATABASE */
  users.push(userUID)

  res.send(`Added new user ${newUser.name}`)
})

// Update (replace data) user by id
router.patch('/users/:id', (req, res, next) => {
  
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

})

// Delete user by id
router.delete('/users/:id', (req, res, next) => {

  /*  */
  const {id} = req.params;

  /*  */
  users = users.filter((user) => user.id !== id);
  
  res.send(`User with ${id} was deleted successfuly.`)
})

console.log(users)
module.exports = router;