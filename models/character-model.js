const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const CharacterSchema = new Schema ({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  level: Number,
  race: Object,
  class: Object,
  abilities: Object,
  proficiencies: Array,
  skills: Object,
  spellcasting: Object,
  spells: [],
  languages: Array,
  ownerUserId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

var Character = mongoose.model('Character', CharacterSchema)
module.exports = Character;