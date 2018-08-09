const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const userController = require('./server/controllers/userController');
const characterController = require('./server/controllers/characterController.js');
const dndController = require('./server/controllers/dndController');

// sessions
// const helmet = require('helmet');
// const session = require('express-session');

const app = express();

require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected:', process.env.DB_NAME);
  })
  .catch(err => {
    console.error.bind(console, 'MongoDB Connection Error');
  });

// // routes:user
// app.post('/api/user/register', userController.userRegister)
// app.post('/api/user/login', userController.userLogin)
// app.get('/api/user/auth', userController.userAuthenticate)
// app.post('/api/user/logout', userController.userLogout)

// // routes:character
// app.get('/api/characters', characterController.listCharacters)
// app.get('api/character/:id', characterController.getCharacter)
// app.post('/api/character/create/', characterController.createCharacter)
// app.put('/api/character/:id', characterController.editCharacter)

// routes:dndAPI
app.get('/api/dnd/races', dndController.listRaces)
app.get('/api/dnd/races/:id', dndController.getRace)
app.get('/api/dnd/classes', dndController.listClasses)
app.get('/api/dnd/classes/:id', dndController.getClass)
app.get('/api/dnd/proficiencies', dndController.listProficiencies)
app.get('/api/dnd/skills', dndController.listSkills)
app.get('/api/dnd/spells', dndController.listSpells)
app.get('/api/dnd/:class/levels', dndController.listClassLevels)
app.get('.api/dnd/features', dndController.listFeatures)


app.get('/', (req, res) => {
  res.send('Hello, I live to Serve.');
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`);
});