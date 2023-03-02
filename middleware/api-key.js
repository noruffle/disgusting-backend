function apikey(req, res, next) {

  const password = 'slojno';

  console.log(req.query.pass);

  if (req.query.pass && (req.query.pass === password)) {
    next();
    
  } else {
    res.json({
      msg: 'Invalid Authentication'
    }
    )
  }


}

module.exports = apikey;