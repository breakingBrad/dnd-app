const express = require('express');
const characterRouter = express.Router();
const characterController = require('../controllers/characterController');

characterRouter.get('/list', characterController.listCharacters)
// characterRouter.get('/:id', characterController.getCharacter)
characterRouter.post('/create', characterController.createCharacter)
// characterRouter.put('/:id', characterController.editCharacter)

module.exports = characterRouter;