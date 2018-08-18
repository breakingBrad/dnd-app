const _ = require('lodash');
const mongoose = require('mongoose'),
User = require('./../../models/user-model');

module.exports = {
  userRegister: (req, res, next) => {
    console.log(`Adding new user: ${req.body.username}`);
    const newUser = new User ({
      _id: new mongoose.Types.ObjectId(),
      username: req.body.username,
      password: req.body.password,
      user_img: req.body.user_img
    });
    newUser.save()
      .then(user => {
        res.status(201).send({ success: `User: '${req.body.username}' added to the database` });
      })
      .catch(err => {
        if (err.code == 11000) {
          let errorMsg = { error: `Username: '${req.body.username}' already exists. Please choose another username.`}
          res.status(409).send(errorMsg);
          console.log(errorMsg);
          console.log(err);
        } else {
        res.status(500).send({err});
        console.log(err);
        }
      });
  },
  userLogin: (req, res, next) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    let errorMsg = { error: `Incorrect Username or Password.` };
    console.log(`Attempting Login for username: ${username}`);
    User.findOne({ username: username }, function(err, user) {
      if (err) 
      console.log(err);
      res.status(500).send(errorMsg);
      user.validatePassword(password, function(err, isMatch) {
        if (err) {
          console.log(err);
          return res.status(500).send(errorMsg);
        } else {
          req.session.userId = user._id;
        }
        console.log(`Password Match:`, isMatch);
        console.log(`Session User Id: ${req.session.userId}`);
      })
    })
  },
  getUser: (req, res, next) => {
    const userId = req.session.userId;
    console.log(userId);
    console.log(req.session);
  },
  userLogout: (req, res, next) => {
    console.log(`Logging out user: ${username}`);
    req.sessions.destroy;
  },
}