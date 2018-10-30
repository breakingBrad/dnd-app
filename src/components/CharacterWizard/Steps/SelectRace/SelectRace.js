import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Select from 'react-select';
import Button from '../../../Button/Button';
import { connect } from 'react-redux';
import { raceBuilder } from '../../../../ducks/reducers/reducer';

class SelectRace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      options: [],
      raceId: '',
      race: [],
      loading: true,
      abilityBonuses: [],
    };
  }

  handleChange = selectedOption => {
    this.setState({
      selectedOption,
      raceId: selectedOption.value,
      loading: true,
    });
    axios.get(`/api/dnd/races/${selectedOption.value}`).then(response => {
      this.setState({
        loading: false,
        race: response.data,
        selectFocus: false,
        abilityBonuses: response.data.ability_bonuses,
      });
    });
  };

  componentWillMount() {
    this.getOptions();
    if (this.props.raceId) {
      this.setState({
        raceId: this.props.raceId,
        race: this.props.race,
        abilityBonuses: this.props.abilityBonuses,
      });
    }
  }

  componentDidMount() {
    if (this.props.raceId) {
      const value = { label: this.props.race.name, value: this.props.raceId };
      this.setState({
        raceId: this.props.raceId,
        race: this.props.race,
        abilityBonuses: this.props.abilityBonuses,
        selectedOption: value,
      });
    }
  }

  getOptions() {
    axios
      .get(`/api/dnd/races`)
      .then(response => {
        let options = response.data.sort();
        this.setState({
          options: options,
        });
      })
      .catch(err => {
        console.warn(err);
      });
  }

  render() {
    const race = this.state.race;
    const nextButton = this.state.raceId ? (
      <span className="wizard-nav-next">
        <Button
          variant="contained"
          raised
          component={Link}
          to="/character-wizard/2"
          onClick={() =>
            this.props.raceBuilder(
              this.state.raceId,
              this.state.race,
              this.state.abilityBonuses,
            )
          }
        >
          &rarr;
        </Button>
      </span>
    ) : null;
    return (
      <div className="step-container">
        <div className="wizard-nav-container">
          <span className="wizard-nav-prev">
            <Button
              variant="contained"
              raised
              component={Link}
              to="/character-wizard/0"
            >
              &larr;
            </Button>
          </span>
          {nextButton}
        </div>
        <h1>Step One: Race</h1>
        <p className="instructions">
          Choose a race in this step. Your choice of race will affect many
          aspects of your character. Your character's race affects everything
          from your ability scores to traits. Choose wisely!
        </p>
        <div className="select-container">
          <Select
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={this.state.options}
            placeholder={'Select Race...'}
            blurInputOnSelect={true}
          />
          <div className="display-selection-container">
            <Paper className="selection-img-container">
              <img
                className="display-img"
                src={require(`../../../../images/race-images/${
                  this.state.raceId ? this.state.raceId : 'placeholder'
                }.jpeg`)}
                alt="race img"
              />
              <h2>{race.name}</h2>
              <p>
                <strong>Speed: </strong>
                {race.speed}
              </p>
              <p>
                <strong>Size: </strong>
                {race.size}
              </p>
              <p>{race.size_description}</p>
            </Paper>
            <Paper className="display-selection">
              <p>
                <strong>Age: </strong>
                {race.age}
              </p>
              <p>
                <strong>Alignment: </strong>
                {race.alignment}
              </p>
              <p>
                <strong>Languages: </strong>
                {race.language_desc}
              </p>
              <p>
                {race.languages
                  ? race.languages.map(
                      (language, i) => (i ? ', ' : '') + language.name,
                    )
                  : null}
              </p>
              <p>
                <strong>Ability Modifiers: </strong>
              </p>
              {race.ability_bonuses ? (
                <ul>
                  <li>STR: {race.ability_bonuses[0]}</li>
                  <li>DEX: {race.ability_bonuses[1]}</li>
                  <li>CON: {race.ability_bonuses[2]}</li>
                  <li>INT: {race.ability_bonuses[3]}</li>
                  <li>WIS: {race.ability_bonuses[4]}</li>
                  <li>CHA: {race.ability_bonuses[5]}</li>
                </ul>
              ) : null}
              <p>
                <strong>Traits: </strong>
                {race.traits
                  ? race.traits.map((trait, i) => (i ? ', ' : '') + trait.name)
                  : null}
              </p>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  raceId: state.raceId,
  race: state.race,
  ability_bonuses: state.abilityBonuses,
});

export default connect(
  mapStateToProps,
  { raceBuilder },
)(SelectRace);
