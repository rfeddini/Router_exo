const express = require('express');
const UserRouter = express.Router();

UserRouter.get('/', function(req, res) {
  return res.send('Birds home page');
});

UserRouter.get('/about', function(req, res) {
  return res.send('About birds');
});

module.exports = UserRouter;
