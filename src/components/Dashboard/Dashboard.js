import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { cancel } from '../../ducks/reducers/reducer'
import Button from '../Button/Button'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
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

  fetchCharacters() {

  }

  render() {
    return (
      <div>
      <NavBar/>
      <div className="dashboard-container">
          <Link className="nav-link" to="/character-wizard">
            <Button
            className="dash-button"
            color="primary"
            variant="contained"
            >
              + New Character
            </Button>
            </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  raceId: state.raceId,
  race: state.race,
  abilityBonuses: state.abilityBonuses,
  classId: state.classId,
  dndClass: state.dndClass,
  proficiencyChoices: state.proficinecyChoices,
  classLevel: state.classLevel,
  level: state.level,
  chosenProficiencies: state.chosenProficiencies,
  str: state.str,
  dex: state.dex,
  con: state.con,
  int: state.int,
  wis: state.wis,
  cha: state.cha,
  name: state.name,
  gender: state.gender,
  height: state.height,
  weight: state.weight,
  age: state.age,
  hair: state.hair,
})

export default connect(mapStateToProps, { cancel })(Dashboard);