const express = require('express');
const characterRouter = express.Router();
const characterController = require('../controllers/character.controller');
const authCheck = require('../middleware/auth-check.middleware');

characterRouter.get('/list', authCheck(), characterController.listCharacters);
characterRouter.get('/:id', characterController.getCharacter);
characterRouter.post('/create', authCheck(), characterController.createCharacter);
characterRouter.delete('/:id', characterController.deleteCharacter);

module.exports = characterRouter;