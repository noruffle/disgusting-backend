/** Install Express and creating server (app) */
const express = require('express');
const path = require('path');
const app = express();
const mainRoutes = require('./routes/route'),
  errorRoutes = require('./routes/route-error'),
  downloadingRoutes = require('./routes/route-download');

/** Install stylesheet ejs */
app.set('view engine', 'ejs');

/** PORT */
app.set('port', process.env.PORT || 3000);

/** Static */
app.use(express.static(__dirname + '/public'));
app.use(mainRoutes);
app.use(errorRoutes);
app.use(downloadingRoutes);

/** Server Listening */
app.listen(
  app.get('port'), () => {console.log(`\nExpress запущен на http://localhost:${app.get('port')} \nНажмите Ctrl + C для завершения.`);}
);