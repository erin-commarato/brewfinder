// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require('../config/middleware/isAuthenticated');
require('dotenv').config();

module.exports = function(app) {
  app.get('/', function(req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect('/members');
    // }
    res.render('index', { api_key: process.env.MAPS_API_KEY });
  });

  app.get('/signup', (req, res) => {
    if (req.user) {
      res.redirect('/members');
    }
    res.render('signup');
  });

  app.get('/login', function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect('/members');
    }
    res.render('login');
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get('/members', isAuthenticated, function(req, res) {
    res.render('members', { user: req.user });
  });
};
