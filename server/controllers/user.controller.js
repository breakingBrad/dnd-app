const _ = require('lodash');
const mongoose = require('mongoose'),
  User = require('../../models/user-model');

module.exports = {
  userRegister: (req, res, next) => {
    console.log(`Adding new user: ${req.body.username}`);
    const newUser = new User({
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
          let errorMsg = { error: `Username: '${req.body.username}' already exists. Please choose another username.` }
          res.status(409).send(errorMsg);
          console.log(errorMsg);
          console.log(err);
        } else {
          res.status(500).send({ err });
          console.log(err);
        }
      });
  },
  userLogin: (req, res, next) => {
    let { username, password } = req.body;
    let errorMsg = { error: `Incorrect Username or Password.` };
    console.log(`Attempting Login for username: ${username}`);
    User.authenticate(username, password, function (error, user) {
      if (error || !user) {
        return res.status(500).send(errorMsg);
      } else {
        req.session.user = {
          userId: user._id,
          username: user.username,
          user_img: user.user_img,
        }
        console.log(`Success! ${username} is now logged in`)
        return res.status(200).send(req.session.user);
      }
    })
  },
  getUser: (req, res, next) => {
    const userId = req.session.user.userId;
    console.log(`Fetching User Info for User Id: ${userId}`);
    User.findById(req.session.user.userId)
      .exec(function (error, user) {
        if (error) {
          return next(error);
        } else {
          if (user === null) {
            var err = new Error('Not authorized! Go back!');
            err.status = 400;
            return next(err);
          } else {
            req.session.user = user;
            return res.status(200).send(user);
          }
        }
      });
  },
  userLogout: (req, res, next) => {
    if (req.session.user) {
      console.log(`Logging out user: ${req.session.user.username}`);
      req.session.destroy();
      res.status(200).send({ message: 'You have successfully logged out.' })
    }
  },
  verifyAuth: (req, res, next) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.status(401).send({ message: 'User is not logged in.' });
    }
  },
  userEdit: (req, res, next) => {
    const userId = req.session.user.userId;
    const { user_img } = req.body;
    if (userId)
      User.findById(userId)
        .exec(function (error, user) {
          if (error) {
            return next(error);
          } else {
            if (user === null) {
              var err = new Error('Not authorized! Go back!');
              err.status = 400;
              return next(err);
            } else {
              user.user_img = user_img;
              req.session.user_img = user_img;
              user.save(function (error) {
                return res.status(200).send(user);
              })
            }
          }
        })
  },
  userRemove: (req, res, next) => {
    const { userId } = req.params;
    console.log('editing user');
    if (userId)
      User.findOneAndRemove(userId)
        .exec(function (error, user) {
          if (error) {
            return next(error);
          } else {
            if (user === null) {
              var err = new Error('Not authorized! Go back!');
              err.status = 400;
              return next(err);
            } else {
              user.save(function (error) {
                return res.status(200).send({ message: `Deleted User Id: ${userId}` });
              })
            }
          }
        })
  }
}