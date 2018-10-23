const initialState = {
  loggedIn: false,
  raceId: '',
  race: [],
  abilityBonuses: [],
  classId: '',
  dndClass: [],
  proficiencyChoices: [],
  classLevel: {},
  level: 1,
  chosenProficiencies: [],
  str: 0,
  dex: 0,
  con: 0,
  int: 0,
  wis: 0,
  cha: 0,
  name: '',
  gender: '',
  height: '',
  weight: '',
  age: '',
  hair: '',
}

const RACE = 'RACE'
const CLASS = 'CLASS'
const PROFICIENCIES = 'PROFICIENCIES'
const ABILITIES = 'ABILITIES'
const DESCRIPTION = 'DESCRIPTION'
const CANCEL = 'CANCEL'

const VERIFIED_USER = 'VERIFIED_USER'

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case VERIFIED_USER:
      return Object.assign({}, state, {loggedIn: action.payload.loggedIn})
    case RACE:
      return Object.assign({}, state,
        {
          raceId: action.payload.raceId,
          race: action.payload.race,
          abilityBonuses: action.payload.abilityBonuses,
        })
    case CLASS:
      return Object.assign({}, state,
        {
          classId: action.payload.classId,
          dndClass: action.payload.dndClass,
          proficiencyChoices: action.payload.proficiencyChoices,
          classLevel: action.payload.classLevel,
          level: action.payload.level,
        })
    case PROFICIENCIES:
      return Object.assign({}, state,
        {
          chosenProficiencies: action.payload.chosenProficiencies,
        })
    case ABILITIES:
      return Object.assign({}, state,
        {
          str: action.payload.str,
          dex: action.payload.dex,
          con: action.payload.con,
          int: action.payload.int,
          wis: action.payload.wis,
          cha: action.payload.cha,
        })
    case DESCRIPTION:
      return Object.assign({}, state,
        {
          name: action.payload.name,
          gender: action.payload.gender,
          height: action.payload.height,
          weight: action.payload.weight,
          age: action.payload.age,
          hair: action.payload.hair,
        })
    case CANCEL:
      return Object.assign({}, state,
        {
          raceId: action.payload.raceId,
          race: action.payload.race,
          abilityBonuses: action.payload.abilityBonuses,
          classId: action.payload.classId,
          dndClass: action.payload.dndClass,
          proficiencyChoices: action.payload.proficiencyChoices,
          classLevel: action.payload.classLevel,
          level: action.payload.level,
          chosenProficiencies: action.payload.chosenProficiencies,
          str: action.payload.str,
          dex: action.payload.dex,
          con: action.payload.con,
          int: action.payload.int,
          wis: action.payload.wis,
          cha: action.payload.cha,
          name: action.payload.name,
          gender: action.payload.gender,
          height: action.payload.height,
          weight: action.payload.weight,
          age: action.payload.age,
          hair: action.payload.hair,
        })
    default: return state
  }
}

export function raceBuilder(raceId, race, abilityBonuses) {
  return {
    type: RACE,
    payload: {
      raceId,
      race,
      abilityBonuses
    }
  }
}

export function classBuilder(classId, dndClass, proficiencyChoices, classLevel, level) {
  return {
    type: CLASS,
    payload: {
      classId,
      dndClass,
      proficiencyChoices,
      classLevel,
      level,
    }
  }
}

export function abilitiesBuilder(str, dex, con, int, wis, cha) {
  return {
    type: ABILITIES,
    payload: {
      str,
      dex,
      con,
      int,
      wis,
      cha,
    }
  }
}

export function proficienciesBuilder(chosenProficiencies) {
  return {
    type: PROFICIENCIES,
    payload: {
      chosenProficiencies,
    }
  }
}

export function descriptionBuilder(name, gender, height, weight, age, hair) {
  return {
    type: DESCRIPTION,
    payload: {
      name,
      gender,
      height,
      weight,
      age,
      hair,
    }
  }
}

export const verifyAuth = (loggedIn) => {
	return {
		type: 'VERIFIED_USER',
		payload: {loggedIn},
	}
}

export function cancel(raceId, race, abilityBonuses, classId, dndClass, proficiencyChoices, classLevel, level, str, dex, con, int, wis, cha, chosenProficiencies, name, gender, height, weight, age, hair) {
  return {
    type: CANCEL,
    payload: {
      raceId: '',
      race: [],
      abilityBonuses: [],
      classId: '',
      dndClass: [],
      proficiencyChoices: [],
      classLevel: {},
      level: 1,
      chosenProficiencies: [],
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
      name: '',
      gender: '',
      height: '',
      weight: '',
      age: '',
      hair: '',
    }
  }
}