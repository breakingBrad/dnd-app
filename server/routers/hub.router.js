const userRouter = require('./user.router');
const dndRouter = require('./dnd.router');
const characterRouter = require('./character.router');

function routerHub(app) {
  app.use('/api/user', userRouter);
  app.use('/api/dnd', dndRouter);
  app.use('/api/character', characterRouter);
}

module.exports = routerHub;