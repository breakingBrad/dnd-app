const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const session = require('express-session');
const routerHub = require('./server/routers/hub.router');

const app = express();
require('dotenv').config();

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected:', process.env.DB_NAME);
  })
  .catch(err => {
    console.error.bind(console, 'MongoDB Connection Error');
  });

  routerHub(app);

app.get('/', (req, res) => {
  res.send('Hello, I live to Serve.');
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`);
});