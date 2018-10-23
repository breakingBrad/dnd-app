const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const CharacterSchema = new Schema ({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  level: Number,
  raceId: Number,
  race: Object,
  abilityBonuses: Array,
  classId: Number,
  dndClass: Object,
  proficiencyChoices: Array,
  classLevel: Object,
  chosenProficiencies: Array,
  str: Number,
  dex: Number,
  con: Number,
  int: Number,
  wis: Number,
  cha: Number,
  name: String,
  height: String,
  gender: String,
  weight: String,
  age: String,
  hair: String,
  ownerUserId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

var Character = mongoose.model('Character', CharacterSchema)
module.exports = Character;