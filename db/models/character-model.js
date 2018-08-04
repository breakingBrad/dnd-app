const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const CharacterSchema = new Schema ({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  level: Number,
  features: [String],
  race: Object,
  class: Object,
  abilities: Object,
  proficiences: Object,
  skills: Object,
  spells: Array,
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