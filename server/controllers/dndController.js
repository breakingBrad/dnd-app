const axios = require('axios');
const _ = require('lodash');

module.exports = {
  listRaces: (req, res, next) => {
    console.log('Fetching Races')
    axios.get('http://www.dnd5eapi.co/api/races/')
      .then(response => {
        res.send(response.data.results);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getRace: (req, res, next) => {
    const { raceId } = req.params;
    console.log(`Fetching Race Id: ${raceId}`)
    axios.get(`http://www.dnd5eapi.co/api/races/${raceId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  listSubraces: (req, res, next) => {
    console.log('Fetching Subraces')
    axios.get('http://www.dnd5eapi.co/api/subraces/')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getSubrace: (req, res, next) => {
    const { subraceId } = req.params;
    console.log(`Fetching Subrace Id: ${subraceId}`)
    axios.get(`http://www.dnd5eapi.co/api/races/${subraceId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  listClasses: (req, res, next) => {
    console.log('Fetching Classes')
    axios.get('http://www.dnd5eapi.co/api/classes/')
      .then(response => {
        res.send(response.data.results);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getClass: (req, res, next) => {
    const { classId } = req.params;
    console.log(`Fetching Class Id: ${classId}`)
    axios.get(`http://www.dnd5eapi.co/api/classes/${classId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  listClassLevels: (req, res, next) => {
    const { className } = req.params;
    console.log(`Fetching Levels for Class: ${className}`)
    axios.get(`http://www.dnd5eapi.co/api/classes/${_.toLower(className)}/levels`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getClassLevel: (req, res, next) => {
    const { className, level } = req.params;
    console.log(`Fetching a Class Level for Class: ${className} Level: ${level}`)
    axios.get(`http://www.dnd5eapi.co/api/classes/${_.toLower(className)}/level/${level}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getClassSpellcasting: (req, res, next) => {
    const { classId } = req.params;
    console.log(`Fetching Spellcasting Class Id: ${classId}`)
    axios.get(`http://www.dnd5eapi.co/api/spellcasting/${classId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  listSubclasses: (req, res, next) => {
    console.log('Fetching Subclasses')
    axios.get('http://www.dnd5eapi.co/api/subclasses/')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getSubclass: (req, res, next) => {
    const { subclassId } = req.params;
    console.log(`Fetching Subclass Id: ${subclassId}`)
    axios.get(`http://www.dnd5eapi.co/api/subclasses/${subclassId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getClassStartingEquipment: (req, res, next) => {
    const { classId } = req.params;
    console.log(`Fetching Starting Equipment for Class Id: ${classId}`)
    axios.get(`http://www.dnd5eapi.co/api/startingequipment/${classId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  listProficiencies: (req, res, next) => {
    console.log('Fetching Proficiencies')
    axios.get('http://www.dnd5eapi.co/api/proficiencies/')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getProficiency: (req, res, next) => {
    const { proficiencyId } = req.params;
    console.log(`Fetching Proficiency Id: ${proficiencyId}`)
    axios.get(`http://www.dnd5eapi.co/api/proficiencies/${proficiencyId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  listSkills: (req, res, next) => {
    console.log('Fetching Skills')
    axios.get('http://www.dnd5eapi.co/api/skills/')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getSkill: (req, res, next) => {
    const { skillId } = req.params;
    console.log(`Fetching Skill Id: ${skillId}`)
    axios.get(`http://www.dnd5eapi.co/api/skills/${skillId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  listSpells: (req, res, next) => {
    console.log('Fetching Spells')
    axios.get('http://www.dnd5eapi.co/api/spells/')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getSpell: (req, res, next) => {
    const { spellId } = req.params;
    console.log(`Fetching Spell Id: ${spellId}`)
    axios.get(`http://www.dnd5eapi.co/api/spells/${spellId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  listFeatures: (req, res, next) => {
    console.log('Fetching Features')
    axios.get('http://www.dnd5eapi.co/api/features')
      .then(response => {
        let uniqueResponseData = _.uniqBy(response.data.results, "url");
        res.send(uniqueResponseData);
        console.log(`Total Results: ${response.data.results.length}`)
        console.log(`Unique Results: ${uniqueResponseData.length}`)
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getFeature: (req, res, next) => {
    const { featureId } = req.params;
    console.log(`Fetching Feature Id: ${featureId}`)
    axios.get(`http://www.dnd5eapi.co/api/features/${featureId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        console.log(err.response.data)
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  listAbilityScores: (req, res, next) => {
    console.log('Fetching Ability Scores')
    axios.get('http://www.dnd5eapi.co/api/ability-scores')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getAbilityScore: (req, res, next) => {
    const { abilityScoreId } = req.params;
    console.log(`Fetching Ability Score Id: ${abilityScoreId}`)
    axios.get(`http://www.dnd5eapi.co/api/ability-scores/${abilityScoreId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        console.log(err.response.data)
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  listLanguages: (req, res, next) => {
    console.log('Fetching Languages')
    axios.get('http://www.dnd5eapi.co/api/languages')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getLanguage: (req, res, next) => {
    const { languageId } = req.params;
    console.log(`Fetching Language Id: ${languageId}`)
    axios.get(`http://www.dnd5eapi.co/api/languages/${languageId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        console.log(err.response.data)
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  listEquipment: (req, res, next) => {
    console.log('Fetching Equipment')
    axios.get('http://www.dnd5eapi.co/api/equipment')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getEquipment: (req, res, next) => {
    const { equipmentId } = req.params;
    console.log(`Fetching Equipment Id: ${equipmentId}`)
    axios.get(`http://www.dnd5eapi.co/api/equipment/${equipmentId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        console.log(err.response.data)
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  listConditions: (req, res, next) => {
    console.log('Fetching Condition')
    axios.get('http://www.dnd5eapi.co/api/conditions')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getCondition: (req, res, next) => {
    const { conditionId } = req.params;
    console.log(`Fetching Condition Id: ${conditionId}`)
    axios.get(`http://www.dnd5eapi.co/api/conditions/${conditionId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        console.log(err.response.data)
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  listDamageTypes: (req, res, next) => {
    console.log('Fetching Damage Type')
    axios.get('http://www.dnd5eapi.co/api/damage-types')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getDamageType: (req, res, next) => {
    const { damageTypeId } = req.params;
    console.log(`Fetching Damage Type Id: ${damageTypeId}`)
    axios.get(`http://www.dnd5eapi.co/api/damage-types/${damageTypeId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        console.log(err.response.data)
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  listMagicSchools: (req, res, next) => {
    console.log('Fetching Magic School')
    axios.get('http://www.dnd5eapi.co/api/magic-schools')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getMagicSchool: (req, res, next) => {
    const { magicSchoolId } = req.params;
    console.log(`Fetching Magic School Id: ${magicSchoolId}`)
    axios.get(`http://www.dnd5eapi.co/api/magic-schools/${magicSchoolId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        console.log(err.response.data)
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  listMonsters: (req, res, next) => {
    console.log('Fetching Monsters')
    axios.get('http://www.dnd5eapi.co/api/monsters')
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  getMonster: (req, res, next) => {
    const { monsterId } = req.params;
    console.log(`Fetching Monster Id: ${monsterId}`)
    axios.get(`http://www.dnd5eapi.co/api/monsters/${monsterId}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        console.log(err.response.data)
        res.status(err.response.status).send(err.response.data);
        console.log(err);
      })
  },
  formatOptions: (res) => {
    let options = res.data;
    options.forEach(function(obj) {
      obj.label = obj.name;
      obj.value = obj.value = obj.url.substr(obj.url.lastIndexOf('/') + 1);
      delete obj.name;
      delete obj.value;
    })
    return options;
    },
  }