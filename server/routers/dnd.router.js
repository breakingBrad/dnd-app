const express = require('express');
const dndRouter = express.Router();
const dndController = require('../controllers/dndController');

dndRouter.get('/races', dndController.listRaces);
dndRouter.get('/races/:raceId', dndController.getRace);
dndRouter.get('/subraces', dndController.listSubraces);
dndRouter.get('/subraces/:subraceId', dndController.getSubrace);
// class
dndRouter.get('/classes', dndController.listClasses);
dndRouter.get('/classes/:classId', dndController.getClass);
dndRouter.get('/classes/:className/levels', dndController.listClassLevels);
dndRouter.get('/classes/:className/level/:level', dndController.getClassLevel);
dndRouter.get('/classes/spellcasting/:classId', dndController.getClassSpellcasting);
dndRouter.get('/subclasses', dndController.listSubclasses);
dndRouter.get('/subclasses/:subclassId', dndController.getSubclass);
dndRouter.get('/classes/startingequipment/:classId', dndController.getClassStartingEquipment);
// proficiencies
dndRouter.get('/proficiencies', dndController.listProficiencies);
dndRouter.get('/proficiencies/:proficiencyId', dndController.getProficiency);
// skills
dndRouter.get('/skills', dndController.listSkills);
dndRouter.get('/skills/:skillId', dndController.getSkill);
// spells
dndRouter.get('/spells', dndController.listSpells);
dndRouter.get('/spells/:spellId', dndController.getSpell);
// feats
dndRouter.get('/features', dndController.listFeatures);
dndRouter.get('/features/:featureId', dndController.getFeature);
// ability-scores
dndRouter.get('/ability-scores', dndController.listAbilityScores);
dndRouter.get('/ability-scores/:abilityScoreId', dndController.getAbilityScore);
// languages
dndRouter.get('/languages', dndController.listLanguages);
dndRouter.get('/languages/:languageId', dndController.getLanguage);
// equipment
dndRouter.get('/equipment', dndController.listEquipment);
dndRouter.get('/equipment/:equipmentId', dndController.getEquipment);
// conditions
dndRouter.get('/conditions', dndController.listConditions);
dndRouter.get('/conditions/:conditionId', dndController.getCondition);
// damage-types
dndRouter.get('/damage-types', dndController.listDamageTypes);
dndRouter.get('/damage-types/:damageTypeId', dndController.getDamageType);
// magic-schools
dndRouter.get('/magic-schools', dndController.listMagicSchools);
dndRouter.get('/magic-schools/:magicSchoolId', dndController.getMagicSchool);
// monsters
dndRouter.get('/monsters', dndController.listMonsters);
dndRouter.get('/monsters/:monsterId', dndController.getMonster);

module.exports = dndRouter;