import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { verifyAuth, cancel } from '../../ducks/reducers/reducer';
import Button from '../Button/Button';
import CharacterCard from '../Character/CharacterCard';

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
      characters: [],
      loading: true,
      activeCharacter: {},
    };
  }

  componentWillMount() {
    axios.get('/api/user/auth').then(res => {
      if (res.status === 200) {
        this.props.verifyAuth(true);
        this.fetchCharacters();
      } else {
        this.props.verifyAuth(false);
        this.props.historyd.push('/');
      }
    });
  }

  fetchCharacters = () => {
    axios
      .get('/api/character/list')
      .then(res => {
        this.setState({
          characters: res.data,
          loading: false,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  removeCharacter(id) {
    axios
      .delete(`/api/character/${id}`)
      .then(() => {
        this.setState({
          characters: this.state.characters.filter(c => c._id != id),
        });
      })
      .catch(err => {
        console.warn(err);
      });
  }

  render() {
    const characters = this.state.characters.map((character, i) => (
      <CharacterCard
        key={`character-list-${i}`}
        {...character}
        removeCharacter={e => {
          e.preventDefault();
          this.removeCharacter(character._id);
        }}
      />
    ));

    return (
      <div>
        <NavBar />
        <div className="dashboard-container">
          <div className="character-list-container">
            <span className="character-list-header">
              <h1>My Characters</h1>
              <Link className="dash-link" to="/character-wizard/0">
                <Button
                  className="new-char-button"
                  color="primary"
                  variant="contained"
                  onClick={this.props.cancel}
                >
                  + New Character
                </Button>
              </Link>
            </span>
            <div className="character-list">{characters}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
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
});

export default connect(
  mapStateToProps,
  { verifyAuth, cancel },
)(Dashboard);
