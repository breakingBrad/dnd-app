import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Paper from '@material-ui/core/Paper';
import Button from '../../../Button/Button'
import { connect } from 'react-redux';
import { raceBuilder } from '../../../../ducks/reducers/reducer'

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
    }
  }

  handleChange = (selectedOption) => {
    this.setState({
      selectedOption,
      raceId: selectedOption.value,
      loading: true, 
    })
    axios.get(`/api/dnd/races/${selectedOption.value}`)
        .then(response => {
          this.setState({
            loading: false,
            race: response.data,
            selectFocus: false,
            abilityBonuses: response.data.ability_bonuses,
          })
        })
    }

  componentDidMount() {
    this.getOptions();
  }

  getOptions() {
    axios.get(`/api/dnd/races`)
      .then(response => {
        let options = response.data.sort();
        this.setState({
          options: options,
        })
      })
      .catch(err => {
        console.warn(err);
      });
  }

  render() {
    const race = this.state.race;
    return (
      <div className="step-container">
        <div className="select-container">
        <Select
        value={this.selectedOption}
        onChange={this.handleChange}
        options={this.state.options}
        placeholder={'Select Race...'}
        blurInputOnSelect={true}
        />
        <div className="display-selection-container">
        <Paper className="selection-img-container">
          <img className="display-img" src={require(`../../../../images/race-images/${this.state.raceId ? this.state.raceId : 'placeholder'}.jpeg`)} alt="race img"/>
        <h2>{race.name}</h2>
        <p><strong>Speed: </strong>{race.speed}</p>
        <p><strong>Size: </strong>{race.size}</p>
        <p>{race.size_description}</p>
        </Paper>
        <Paper className="display-selection">
        <p><strong>Age: </strong>{race.age}</p>
        <p><strong>Alignment: </strong>{race.alignment}</p>
        <p><strong>Languages: </strong>{race.language_desc}</p>
        <p>{race.languages ? race.languages.map((language, i) => ((i ? ', ': '') + language.name )) : null}</p>
        <p><strong>Ability Modifiers: </strong></p>
        {race.ability_bonuses ? (
          <ul>
          <li>STR: {race.ability_bonuses[0]}</li>
          <li>DEX: {race.ability_bonuses[1]}</li>
          <li>CON: {race.ability_bonuses[2]}</li>
          <li>INT: {race.ability_bonuses[3]}</li>
          <li>WIS: {race.ability_bonuses[4]}</li>
          <li>CHA: {race.ability_bonuses[5]}</li>
          </ul>
        ) : null 
        }
        <p><strong>Traits: </strong>{race.traits ? race.traits.map((trait, i) => ((i ? ', ': '') + trait.name )) : null}</p>
        </Paper>
        </div>
        <div className="save-changes-container">
          <Button 
            color="primary"
            variant="contained"
            onClick={() => this.props.raceBuilder(this.state.raceId, this.state.race, this.state.abilityBonuses)}
          >
          Save Selection
          </Button>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  raceId: state.raceId,
  race: state.race,
  ability_bonuses: state.abilityBonuses,
});

export default connect(mapStateToProps, { raceBuilder })(SelectRace);
