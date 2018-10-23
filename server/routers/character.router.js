const express = require('express');
const characterRouter = express.Router();
const characterController = require('../controllers/characterController');

// characterRouter.get('/api/characters', characterController.listCharacters)
// characterRouter.get('api/character/:id', characterController.getCharacter)
characterRouter.post('/api/character/create', characterController.createCharacter)
// characterRouter.put('/api/character/:id', characterController.editCharacter)

module.exports = characterRouter;