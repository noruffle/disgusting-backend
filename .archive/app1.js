/** Install Express and creating server (app) */
var express = require('express');
var app = express();
var path;

/** Install local modules */
var fortune = require('../lib/fortune.js');
var weather = require('../lib/weather.js');

/** Install stylesheet handlebars */
var handlebars = require('express-handlebars')
  .create({
    defaultLayout:'main',
    layoutsDir:'views/layouts'
  });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

/** PORT */
app.set('port', process.env.PORT || 3000);

/** Static */
app.use(express.static(__dirname + '/public'));

/** Tests **/
app.use(function(req, res, next) {
  res.locals.showTests = app.get('env') !== 'production' &&
    req.query.test === '1';
  next();
});

/** Routes */
/* Main page */
app.get('/', function(req, res, next) {
  res.render('default');
});

/* About page */
app.get('/about', function(req, res, next) {
  res.render('about', { 
    fortune: fortune.getFortune(),
    pageTestScript: '/qa/tests-about.js'
  });
});

/** Contact **/
app.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Contacts of Ruffle'
  });
});

app.get('/headers', function(req, res, next) {
  res.set('Content-Type', 'text/plain');
  var s = '';
  for(var name in req.headers){
    s += name + ': ' + req.headers[name] + '\n';
  }
  res.send(s);
});

/** Tours **/
/* Hood River */
app.get('/tours/hood-river', function(req, res, next) {
  res.set('Content-Type', 'text/html');
  res.render('tours/hood-river');
});

/* Request Group Rate */
app.get('/tours/request-group-rate', function(req, res, next) {
  res.render('tour/request-group-rate');
});

/* Downloads */
app.get('/download', (req, res) => {
  res.download(__dirname + '/test.html')
})


/** Errors */
/* 404 */
app.use(function(req, res, next) {
  res.status(404);
  res.render('404');
});

/* 500 */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

/** Server Listening */
app.listen(
  app.get('port'), () => {
    console.log('\nExpress запущен на http://localhost:' + 
    app.get('port') + '\nНажмите Ctrl + C для завершения.');
  }
);