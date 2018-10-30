const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const routerHub = require('./server/routers/hub.router');
const MongoStore = require('connect-mongo')(session);

const app = express();
require('dotenv').config();

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      touchAfter: 24 * 3600 
    })
  }));
  
  
app.use(cors());
app.use(bodyParser.json());


mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected:', process.env.DB_NAME);
  })
  .catch(err => {
    console.error.bind(console, 'MongoDB Connection Error');
  });

routerHub(app);

app.use( express.static( `${__dirname}/../build` ) );
app.get('/', (req, res) => {
  res.send('Hello, I live to Serve.');
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`);
});