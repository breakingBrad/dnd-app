function authCheck () {
  return (req, res, next) => {
      if (!req.session.user) {
          return res.status(401).send({ message: 'You need to log in' });
      }
      next();
  };
}

module.exports = authCheck;