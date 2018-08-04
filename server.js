const express = require('express');
const mongoose = require('mongoose');
const User = require('./db/models/user-model');
const Character = require('./db/models/character-model');

// const bodyParser = require('body-parser');
// const dbController = require('.server/controllers/dbController');
// const dndController = require('.server/controllers/dndAPIController');
// const cors = require('cors');
// sessions
// const helmet = require('helmet');
// const session = require('express-session');

const app = express();

require('dotenv').config();

mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true })
  .then( () => {
    console.log('MongoDB Connected:', process.env.DB_NAME);
  })
  .catch(err => {
    console.error.bind(console, 'MongoDB Connection Error:');
  });




app.get('/', (req, res) => {
  res.send('Hello, I live to Serve.');
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`);
});