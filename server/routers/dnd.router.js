const express = require('express');
const dndRouter = express.Router();
const dndController = require('../controllers/dndController');

dndRouter.get('/api/dnd/races', dndController.listRaces);
dndRouter.get('/api/dnd/races/:raceId', dndController.getRace);
dndRouter.get('/api/dnd/subraces', dndController.listSubraces);
dndRouter.get('/api/dnd/subraces/:subraceId', dndController.getSubrace);
// class
dndRouter.get('/api/dnd/classes', dndController.listClasses);
dndRouter.get('/api/dnd/classes/:classId', dndController.getClass);
dndRouter.get('/api/dnd/classes/:className/levels', dndController.listClassLevels);
dndRouter.get('/api/dnd/classes/:className/level/:level', dndController.getClassLevel);
dndRouter.get('/api/dnd/classes/spellcasting/:classId', dndController.getClassSpellcasting);
dndRouter.get('/api/dnd/subclasses', dndController.listSubclasses);
dndRouter.get('/api/dnd/subclasses/:subclassId', dndController.getSubclass);
dndRouter.get('/api/dnd/classes/startingequipment/:classId', dndController.getClassStartingEquipment);
// proficiencies
dndRouter.get('/api/dnd/proficiencies', dndController.listProficiencies);
dndRouter.get('/api/dnd/proficiencies/:proficiencyId', dndController.getProficiency);
// skills
dndRouter.get('/api/dnd/skills', dndController.listSkills);
dndRouter.get('/api/dnd/skills/:skillId', dndController.getSkill);
// spells
dndRouter.get('/api/dnd/spells', dndController.listSpells);
dndRouter.get('/api/dnd/spells/:spellId', dndController.getSpell);
// feats
dndRouter.get('/api/dnd/features', dndController.listFeatures);
dndRouter.get('/api/dnd/features/:featureId', dndController.getFeature);
// ability-scores
dndRouter.get('/api/dnd/ability-scores', dndController.listAbilityScores);
dndRouter.get('/api/dnd/ability-scores/:abilityScoreId', dndController.getAbilityScore);
// languages
dndRouter.get('/api/dnd/languages', dndController.listLanguages);
dndRouter.get('/api/dnd/languages/:languageId', dndController.getLanguage);
// equipment
dndRouter.get('/api/dnd/equipment', dndController.listEquipment);
dndRouter.get('/api/dnd/equipment/:equipmentId', dndController.getEquipment);
// conditions
dndRouter.get('/api/dnd/conditions', dndController.listConditions);
dndRouter.get('/api/dnd/conditions/:conditionId', dndController.getCondition);
// damage-types
dndRouter.get('/api/dnd/damage-types', dndController.listDamageTypes);
dndRouter.get('/api/dnd/damage-types/:damageTypeId', dndController.getDamageType);
// magic-schools
dndRouter.get('/api/dnd/magic-schools', dndController.listMagicSchools);
dndRouter.get('/api/dnd/magic-schools/:magicSchoolId', dndController.getMagicSchool);
// monsters
dndRouter.get('/api/dnd/monsters', dndController.listMonsters);
dndRouter.get('/api/dnd/monsters/:monsterId', dndController.getMonster);

module.exports = dndRouter;