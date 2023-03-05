/** Install Express and creating server (app) */
const express = require('express');
const path = require('path');
const app = express();
const config = require('./config');

const basic = require('./routes/Basic.route'),
  error = require('./routes/Error.route'),
  download = require('./routes/Download.route'),
  specific = require('./routes/Specific.route'),
  users = require('./routes/Users.route'),
  test = require('./routes/Test.route');

/* Joining middleware */
const apiMiddleware = require('./middleware/api-password.js')

/** Install stylesheet ejs */
app.set('view engine', 'ejs');

/** PORT */
app.set(config.port);

/** Static */
app.use(express.static(__dirname + '/public'));

/* Gives us to get JSON data */
/* app.use(express.urlencoded({extended: true})) */
app.use(express.json())

/* Middleware */
/* Password: /?pass=slojno */
// app.use(apiMiddleware);

/* Routes */
app.use(basic);
app.use(users);
app.use(specific);
app.use(test);
app.use(error);
app.use(download);

/** Server Listening */
app.listen(config.port,
  () => {console.log(`\nExpress запущен на http://localhost:${config.port} \nНажмите Ctrl + C для завершения.`);
});