const initialState = {
  username: '',
  user_img: '',

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

const REGISTER = 'REGISTER'
const LOGIN = 'LOGIN'
const GET_USER_INFO = 'GET_USER_INFO'
const LOGOUT = 'LOGOUT'

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case REGISTER:
      return Object.assign({}, state, { username: action.payload.username, user_img: action.payload.user_img, })
    case LOGIN:
      return Object.assign({}, state, { username: action.payload.username, user_img: action.payload.user_img, })
    case GET_USER_INFO:
      return Object.assign({}, state, { username: action.payload.username, user_img: action.payload.user_img, })
    case LOGOUT:
      return Object.assign({}, state, { username: action.payload.username, user_img: action.payload.user_img, })

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
    default: return state
  }
}

export function loginUser(username, user_img) {
  return {
    type: LOGIN,
    payload: {
      username, 
      user_img
    }
  }
}

export function registerUser(username, user_img) {
  return {
    type: REGISTER,
    payload: {
      username, 
      user_img
    }
  }
}

export function getUser(username, user_img) {
  return {
    type: GET_USER_INFO,
    payload: {
      username, 
      user_img
    }
  }
}

export function logOut() {
  return {
    type: LOGOUT,
    payload: initialState
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