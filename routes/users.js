var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'LOGIN' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'REGISTER' });
});

router.post('/register', function(request, response, next) {
  console.log(request.body)
  res.send('hello')
})



module.exports = router;
