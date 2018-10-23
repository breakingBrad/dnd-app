const userRouter = require('./user.router');
const dndRouter = require('./dnd.router');
const characterRouter = require('./character.router');

function routerHub(app) {
  app.use(userRouter);
  app.use(dndRouter);
  app.use(characterRouter);
}

module.exports = routerHub;