const userRouter = require('./user.router');
const dndRouter = require('./dnd.router');

function routerHub(app) {
  app.use(userRouter);
  app.use(dndRouter);
}

module.exports = routerHub;