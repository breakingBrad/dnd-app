const express = require('express');
const characterRouter = express.Router();
const characterController = require('../controllers/characterController');

// app.get('/api/characters', characterController.listCharacters)
// app.get('api/character/:id', characterController.getCharacter)
// app.post('/api/character/create/', characterController.createCharacter)
// app.put('/api/character/:id', characterController.editCharacter)

module.exports = characterRouter;