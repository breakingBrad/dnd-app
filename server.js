const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const userController = require('./server/controllers/userController');
const characterController = require('./server/controllers/characterController');
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
// race
app.get('/api/dnd/races', dndController.listRaces)
app.get('/api/dnd/races/:raceId', dndController.getRace)
app.get('/api/dnd/api/subraces', dndController.listSubraces)
app.get('/api/dnd/api/subraces/:subraceId', dndController.getSubrace)
// class
app.get('/api/dnd/classes', dndController.listClasses)
app.get('/api/dnd/classes/:classId', dndController.getClass)
app.get('/api/dnd/classes/:className/levels', dndController.listClassLevels)
app.get('/api/dnd/classes/:className/level/:level', dndController.getClassLevel)
app.get('/api/dnd/classes/spellcasting/:classId', dndController.getClassSpellcasting)
app.get('/api/dnd/subclasses', dndController.listSubclasses)
app.get('/api/dnd/subclasses/:subclassId', dndController.getSubclass)
app.get('/api/dnd/classes/startingequipment/:classId', dndController.getClassStartingEquipment)
// proficiencies
app.get('/api/dnd/proficiencies', dndController.listProficiencies)
app.get('/api/dnd/proficiencies/:proficiencyId', dndController.getProficiency)
// skills
app.get('/api/dnd/skills', dndController.listSkills)
app.get('/api/dnd/skills/:skillId', dndController.getSkill)
// spells
app.get('/api/dnd/spells', dndController.listSpells)
app.get('/api/dnd/spells/:spellId', dndController.getSpell)
// feats
app.get('/api/dnd/features', dndController.listFeatures)
app.get('/api/dnd/features/:featureId', dndController.getFeature)
// ability-scores
app.get('/api/dnd/ability-scores', dndController.listAbilityScores)
app.get('/api/dnd/ability-scores/:abilityScoreId', dndController.getAbilityScore)
// languages
app.get('/api/dnd/languages', dndController.listLanguages)
app.get('/api/dnd/languages/:languageId', dndController.getLanguage)
// equipment
app.get('/api/dnd/equipment', dndController.listEquipment)
app.get('/api/dnd/equipment/:equipmentId', dndController.getEquipment)
// conditions
app.get('/api/dnd/conditions', dndController.listConditions)
app.get('/api/dnd/conditions/:conditionId', dndController.getCondition)
// damage-types
app.get('/api/dnd/damage-types', dndController.listDamageTypes)
app.get('/api/dnd/damage-types/:damageTypeId', dndController.getDamageType)
// magic-schools
app.get('/api/dnd/magic-schools', dndController.listMagicSchools)
app.get('/api/dnd/magic-schools/:magicSchoolId', dndController.getMagicSchool)
// monsters
app.get('/api/dnd/monsters', dndController.listMonsters)
app.get('/api/dnd/monsters/:monsterId', dndController.getMonster)


app.get('/', (req, res) => {
  res.send('Hello, I live to Serve.');
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`);
});