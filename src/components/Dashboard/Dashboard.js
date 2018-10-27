import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { verifyAuth, cancel } from '../../ducks/reducers/reducer'
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

  componentWillMount() {
      axios.get('/api/user/auth').then(res => {
        if (res.status === 200) {
          this.props.verifyAuth(true);
        } else {
          this.props.verifyAuth(false);
          this.props.historyd.push('/');
        }
      })
  }

  fetchCharacters() {

  }

  render() {
    return (
      <div>
      <NavBar/>
        <div className="dashboard-container">
            <Link className="dash-link" to="/character-wizard/0">
              <Button
              className="dash-button"
              color="primary"
              variant="contained"
              >
                + New Character
              </Button>
              </Link>
              {/* <h1>My Characters</h1> */}
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

export default connect(mapStateToProps, { verifyAuth, cancel })(Dashboard);