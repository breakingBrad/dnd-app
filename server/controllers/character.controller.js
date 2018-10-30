const _ = require('lodash');
const mongoose = require('mongoose'),
  Character = require('../../models/character-model');

module.exports = {
  listCharacters: (req, res, next) => {
    const userId = req.session.user.userId;
    Character.find({ 'ownerUserId': userId })
      .then(characters => {
        res.status(200).json(characters);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send({ error: err.message });
      })
  },
  getCharacter: (req, res, next) => {
    const userId = req.session.user.userId;
    const { id } = req.params;
    Character.find({ 'ownerUserId': userId, '_id': id })
      .then(character => {
        res.status(200).json(character);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send({ error: err.message });
      })
    },
  createCharacter: (req, res, next) => {
    console.log(`Adding new character`);
    console.log(req.body);
    const newCharacter = new Character({
      _id: new mongoose.Types.ObjectId(),
      ownerUserId: req.session.user.userId,
      raceId: req.body.raceId,
      race: req.body.race,
      abilityBonuses: req.body.abilityBonuses,
      classId: req.body.classId,
      dndClass: req.body.dndClass,
      proficiencyChoices: req.body.proficinecyChoices,
      classLevel: req.body.classLevel,
      level: req.body.level,
      chosenProficiencies: req.body.chosenProficiencies,
      str: req.body.str,
      dex: req.body.dex,
      con: req.body.con,
      int: req.body.int,
      wis: req.body.wis,
      cha: req.body.cha,
      name: req.body.name,
      gender: req.body.gender,
      height: req.body.height,
      weight: req.body.weight,
      age: req.body.age,
      hair: req.body.hair,
    });
    newCharacter.save()
      .then(character => {
        res.status(201).send(character);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send({ error: err.message });
      })
  },
  // editCharacter: (req, res, next) => {

  // },
}