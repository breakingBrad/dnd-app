const User = require('../../models/user-model');
const Character = require('../../models/character-model');

var admin = new User({
  _id: new mongoose.Types.ObjectId(),
  username: 'admin',
  password: 'password',
  name: {
    firstName: 'ad',
    lastName: 'min',
  }
})

admin.save(function (err) {
  if (err) throw err;
  console.log('User created!');
});

var testCharacter = new Character({
  _id: new mongoose.Types.ObjectId,
  name: 'bard-test-001',
  level: 1,
  race: {
    "_id": "5a52baf5559f00418e532722",
    "index": 4,
    "name": "Human",
    "speed": 30,
    "ability_bonuses": [
      1,
      1,
      1,
      1,
      1,
      1
    ],
    "age": "Humans reach adulthood in their late teens and live less than a century.",
    "alignment": "Humans tend toward no particular alignment. The best and the worst are found among them.",
    "size": "Medium",
    "size_description": "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
    "starting_proficiencies": [],
    "languages": [
      {
        "name": "Common",
        "url": "http://www.dnd5eapi.co/api/languages/1"
      }
    ],
    "language_options": {
      "choose": 1,
      "type": "languages",
      "from": [
        {
          "name": "Dwarvish",
          "url": "http://www.dnd5eapi.co/api/languages/2"
        },
        {
          "name": "Elvish",
          "url": "http://www.dnd5eapi.co/api/languages/3"
        },
        {
          "name": "Giant",
          "url": "http://www.dnd5eapi.co/api/languages/4"
        },
        {
          "name": "Gnomish",
          "url": "http://www.dnd5eapi.co/api/languages/5"
        },
        {
          "name": "Goblin",
          "url": "http://www.dnd5eapi.co/api/languages/6"
        },
        {
          "name": "Halfling",
          "url": "http://www.dnd5eapi.co/api/languages/7"
        },
        {
          "name": "Orc",
          "url": "http://www.dnd5eapi.co/api/languages/8"
        },
        {
          "name": "Abyssal",
          "url": "http://www.dnd5eapi.co/api/languages/9"
        },
        {
          "name": "Celestial",
          "url": "http://www.dnd5eapi.co/api/languages/10"
        },
        {
          "name": "Draconic",
          "url": "http://www.dnd5eapi.co/api/languages/11"
        },
        {
          "name": "Deep Speech",
          "url": "http://www.dnd5eapi.co/api/languages/12"
        },
        {
          "name": "Infernal",
          "url": "http://www.dnd5eapi.co/api/languages/13"
        },
        {
          "name": "Primordial",
          "url": "http://www.dnd5eapi.co/api/languages/14"
        },
        {
          "name": "Sylvan",
          "url": "http://www.dnd5eapi.co/api/languages/15"
        },
        {
          "name": "Undercommon",
          "url": "http://www.dnd5eapi.co/api/languages/16"
        }
      ]
    },
    "language_desc": "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.",
    "traits": [],
    "subraces": [],
    "url": "http://www.dnd5eapi.co/api/races/4"
  },
  class: {
    "_id": "5afe386947afbaf224116ced",
    "index": 2,
    "name": "Bard",
    "hit_die": 8,
    "proficiency_choices": [
      {
        "from": [
          {
            "name": "Skill: Acrobatics",
            "url": "http://www.dnd5eapi.co/api/proficiencies/105"
          },
          {
            "name": "Skill: Animal Handling",
            "url": "http://www.dnd5eapi.co/api/proficiencies/106"
          },
          {
            "name": "Skill: Arcana",
            "url": "http://www.dnd5eapi.co/api/proficiencies/107"
          },
          {
            "name": "Skill: Athletics",
            "url": "http://www.dnd5eapi.co/api/proficiencies/108"
          },
          {
            "name": "Skill: Deception",
            "url": "http://www.dnd5eapi.co/api/proficiencies/109"
          },
          {
            "name": "Skill: History",
            "url": "http://www.dnd5eapi.co/api/proficiencies/110"
          },
          {
            "name": "Skill: Insight",
            "url": "http://www.dnd5eapi.co/api/proficiencies/111"
          },
          {
            "name": "Skill: Intimidation",
            "url": "http://www.dnd5eapi.co/api/proficiencies/112"
          },
          {
            "name": "Skill: Investigation",
            "url": "http://www.dnd5eapi.co/api/proficiencies/113"
          },
          {
            "name": "Skill: Medicine",
            "url": "http://www.dnd5eapi.co/api/proficiencies/114"
          },
          {
            "name": "Skill: Nature",
            "url": "http://www.dnd5eapi.co/api/proficiencies/115"
          },
          {
            "name": "Skill: Perception",
            "url": "http://www.dnd5eapi.co/api/proficiencies/116"
          },
          {
            "name": "Skill: Performance",
            "url": "http://www.dnd5eapi.co/api/proficiencies/117"
          },
          {
            "name": "Skill: Persuasion",
            "url": "http://www.dnd5eapi.co/api/proficiencies/118"
          },
          {
            "name": "Skill: Religion",
            "url": "http://www.dnd5eapi.co/api/proficiencies/119"
          },
          {
            "name": "Skill: Sleight of Hand",
            "url": "http://www.dnd5eapi.co/api/proficiencies/120"
          },
          {
            "name": "Skill: Stealth",
            "url": "http://www.dnd5eapi.co/api/proficiencies/121"
          },
          {
            "name": "Skill: Survival",
            "url": "http://www.dnd5eapi.co/api/proficiencies/122"
          }
        ],
        "type": "proficiencies",
        "choose": 3
      },
      {
        "from": [
          {
            "name": "Bagpipes",
            "url": "http://www.dnd5eapi.co/api/proficiencies/81"
          },
          {
            "name": "Drum",
            "url": "http://www.dnd5eapi.co/api/proficiencies/82"
          },
          {
            "name": "Dulcimer",
            "url": "http://www.dnd5eapi.co/api/proficiencies/83"
          },
          {
            "name": "Flute",
            "url": "http://www.dnd5eapi.co/api/proficiencies/84"
          },
          {
            "name": "Lute",
            "url": "http://www.dnd5eapi.co/api/proficiencies/85"
          },
          {
            "name": "Lyre",
            "url": "http://www.dnd5eapi.co/api/proficiencies/86"
          },
          {
            "name": "Horn",
            "url": "http://www.dnd5eapi.co/api/proficiencies/87"
          },
          {
            "name": "Pan flute",
            "url": "http://www.dnd5eapi.co/api/proficiencies/88"
          },
          {
            "name": "Shawm",
            "url": "http://www.dnd5eapi.co/api/proficiencies/89"
          },
          {
            "name": "Viol",
            "url": "http://www.dnd5eapi.co/api/proficiencies/90"
          }
        ],
        "type": "proficiencies",
        "choose": 3
      }
    ],
    "proficiencies": [
      {
        "url": "http://www.dnd5eapi.co/api/proficiencies/1",
        "name": "Light armor"
      },
      {
        "url": "http://www.dnd5eapi.co/api/proficiencies/19",
        "name": "Simple weapons"
      },
      {
        "url": "http://www.dnd5eapi.co/api/proficiencies/42",
        "name": "Longswords"
      },
      {
        "url": "http://www.dnd5eapi.co/api/proficiencies/46",
        "name": "Rapiers"
      },
      {
        "url": "http://www.dnd5eapi.co/api/proficiencies/48",
        "name": "Shortswords"
      },
      {
        "url": "http://www.dnd5eapi.co/api/proficiencies/54",
        "name": "Crossbows, hand"
      }
    ],
    "saving_throws": [
      {
        "url": "http://www.dnd5eapi.co/api/ability-scores/2",
        "name": "DEX"
      },
      {
        "url": "http://www.dnd5eapi.co/api/ability-scores/6",
        "name": "CHA"
      }
    ],
    "starting_equipment": {
      "url": "http://www.dnd5eapi.co/api/startingequipment/2",
      "class": "Bard"
    },
    "class_levels": {
      "url": "http://www.dnd5eapi.co/api/classes/Bard/levels",
      "class": "Bard"
    },
    "subclasses": [
      {
        "name": "Lore",
        "url": "http://www.dnd5eapi.co/api/subclasses/2"
      }
    ],
    "spellcasting": {
      "url": "http://www.dnd5eapi.co/api/spellcasting/1",
      "class": "Bard"
    },
    "url": "http://www.dnd5eapi.co/api/classes/2"
  },
  abilities: {},
  proficiencies: [
    {
      "name": "Skill: Insight",
      "url": "http://www.dnd5eapi.co/api/proficiencies/111"
    },
    {
      "name": "Skill: Intimidation",
      "url": "http://www.dnd5eapi.co/api/proficiencies/112"
    },
    {
      "name": "Skill: Investigation",
      "url": "http://www.dnd5eapi.co/api/proficiencies/113"
    },
    {
      "url": "http://www.dnd5eapi.co/api/proficiencies/1",
      "name": "Light armor"
    },
    {
      "url": "http://www.dnd5eapi.co/api/proficiencies/19",
      "name": "Simple weapons"
    },
    {
      "url": "http://www.dnd5eapi.co/api/proficiencies/42",
      "name": "Longswords"
    },
    {
      "url": "http://www.dnd5eapi.co/api/proficiencies/46",
      "name": "Rapiers"
    },
    {
      "url": "http://www.dnd5eapi.co/api/proficiencies/48",
      "name": "Shortswords"
    },
    {
      "url": "http://www.dnd5eapi.co/api/proficiencies/54",
      "name": "Crossbows, hand"
    },
    {
      "name": "Bagpipes",
      "url": "http://www.dnd5eapi.co/api/proficiencies/81"
    },
    {
      "name": "Drum",
      "url": "http://www.dnd5eapi.co/api/proficiencies/82"
    },
    {
      "name": "Dulcimer",
      "url": "http://www.dnd5eapi.co/api/proficiencies/83"
    },
  ],
  skills: {},
  spellcasting: {
    "cantrips_known": 2,
    "spells_known": 4,
    "spell_slots_level_1": 2,
    "spell_slots_level_2": 0,
    "spell_slots_level_3": 0,
    "spell_slots_level_4": 0,
    "spell_slots_level_5": 0,
    "spell_slots_level_6": 0,
    "spell_slots_level_7": 0,
    "spell_slots_level_8": 0,
    "spell_slots_level_9": 0
  },
  spells: [
    {
      "_id": "5a52bc3a559f00418e532fd3",
      "index": 169,
      "name": "Light",
      "desc": [
        "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.",
        "If you target an object held or worn by a hostile creature, that creature must succeed on a dexterity saving throw to avoid the spell."
      ],
      "page": "phb 255",
      "range": "Touch",
      "components": [
        "V",
        "M"
      ],
      "material": "A firefly or phosphorescent moss.",
      "ritual": "no",
      "duration": "1 hour",
      "concentration": "no",
      "casting_time": "1 action",
      "level": 0,
      "school": {
        "url": "http://www.dnd5eapi.co/api/magic-schools/5",
        "name": "Evocation"
      },
      "classes": [
        {
          "name": "Bard",
          "url": "http://www.dnd5eapi.co/api/classes/2"
        },
        {
          "name": "Cleric",
          "url": "http://www.dnd5eapi.co/api/classes/3"
        },
        {
          "name": "Sorcerer",
          "url": "http://www.dnd5eapi.co/api/classes/10"
        },
        {
          "name": "Wizard",
          "url": "http://www.dnd5eapi.co/api/classes/12"
        }
      ],
      "subclasses": [
        {
          "url": "http://www.dnd5eapi.co/api/subclasses/2",
          "name": "Lore"
        }
      ],
      "url": "http://www.dnd5eapi.co/api/spells/169"
    },
    {
      "_id": "5a52bc3a559f00418e532fdd",
      "index": 176,
      "name": "Mage Hand",
      "desc": [
        "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.",
        "You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.",
        "The hand canâ€™t attack, activate magic items, or carry more than 10 pounds."
      ],
      "page": "phb 256",
      "range": "30 feet",
      "components": [
        "V",
        "S"
      ],
      "ritual": "no",
      "duration": "1 minute",
      "concentration": "no",
      "casting_time": "1 action",
      "level": 0,
      "school": {
        "url": "http://www.dnd5eapi.co/api/magic-schools/2",
        "name": "Conjuration"
      },
      "classes": [
        {
          "name": "Bard",
          "url": "http://www.dnd5eapi.co/api/classes/2"
        },
        {
          "name": "Sorcerer",
          "url": "http://www.dnd5eapi.co/api/classes/10"
        },
        {
          "name": "Warlock",
          "url": "http://www.dnd5eapi.co/api/classes/11"
        },
        {
          "name": "Wizard",
          "url": "http://www.dnd5eapi.co/api/classes/12"
        }
      ],
      "subclasses": [
        {
          "url": "http://www.dnd5eapi.co/api/subclasses/2",
          "name": "Lore"
        }
      ],
      "url": "http://www.dnd5eapi.co/api/spells/176"
    },
    {
      "_id": "5a52bc3a559f00418e532fe9",
      "index": 191,
      "name": "Message",
      "desc": [
        "You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.",
        "You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesnâ€™t have to follow a straight line and can travel freely around corners or through openings."
      ],
      "page": "phb 259",
      "range": "120 feet",
      "components": [
        "V",
        "S",
        "M"
      ],
      "material": "A short piece of copper wire.",
      "ritual": "no",
      "duration": "1 round",
      "concentration": "no",
      "casting_time": "1 action",
      "level": 0,
      "school": {
        "name": "Transmutation",
        "url": "http://dnd5eapi.co/api/magic-schools/8"
      },
      "classes": [
        {
          "name": "Bard",
          "url": "http://dnd5eapi.co/api/classes/2"
        },
        {
          "name": "Sorcerer",
          "url": "http://dnd5eapi.co/api/classes/10"
        },
        {
          "name": "Wizard",
          "url": "http://dnd5eapi.co/api/classes/12"
        }
      ],
      "subclasses": [
        {
          "url": "http://dnd5eapi.co/api/subclasses/2",
          "name": "Lore"
        }
      ],
      "url": "http://www.dnd5eapi.co/api/spells/191"
    },
  ],
  languages: [
    'Common',
    'Dwarvish',
  ],
  ownerUserId: admin._id,
})

testCharacter.save(function(err) {
  if (err) throw err;
  console.log('Character created!');
});