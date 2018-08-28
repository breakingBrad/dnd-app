import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Button from '../../../Button/Button'
import Paper from '@material-ui/core/Paper';


class SelectRace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
      options: [],
      raceId: '',
      race: [],
      loading: true,
    }
  }

  handleChange = (selectedOption) => {
    this.setState({
      selectedOption,
      raceId: selectedOption.value,
    });
  }

  componentDidMount() {
    this.getOptions();
  }


  getOptions() {
    axios.get(`http://localhost:4000/api/dnd/races`)
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

  getData(e, id) {
    e.preventDefault();
    this.setState({ loading: true });
    axios.get(`http://localhost:4000/api/dnd/races/${id}`)
      .then(response => {
        this.setState({
          loading: false,
          race: response.data,
        })
      })
    }

  render() {
    const race = this.state.race;
    return (
      <div>
        <Paper>
        <strong>Step One: Race</strong>
        <br/><br/>
        <div className="select-container">
        <Select
        value={this.selectedOption}
        onChange={this.handleChange}
        options={this.state.options}
        placeholder={'Select Race...'}
        />
        <Button
        type="submit"
        className="search-button"
        onClick={e => this.getData(e, this.state.raceId, this.state.loading)}>
        Get Info
        </Button>
        </div>
        <div className="display-selection">
        {/*  */}
        <h2>{race.name}</h2>
        <p><strong>Speed: </strong>{race.speed}</p>
        <p><strong>Size: </strong>{race.size}</p>
        <p><strong>Alignment: </strong>{race.alignment}</p>
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
        <br />
        </div>
        </Paper>
      </div>
    );
  }
}

export default SelectRace;
