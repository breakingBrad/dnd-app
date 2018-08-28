import React, { Component } from 'react';
import ReactJson from 'react-json-view'
import axios from 'axios';
import Select from 'react-select';
import Button from '../../../Button/Button'


class SelectRace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
      options: [],
      raceId: '',
      race: [],
      loading: true,
      abilityMods: [],
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
        let abilities = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
        let abilityMods = response.data.ability_bonuses.map((obj, i) => {
          let newObj = {};
            newObj[abilities[i]] = obj;
            return newObj;
            console.log(abilityMods);
        });
        this.setState({
          loading: false,
          race: response.data,
          abilityMods: abilityMods,
        })
      })
    }

  render() {
    const race = this.state.race;
    return (
      <div>
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
          <ul>
            {race.ability_bonuses ? race.ability_bonuses.map((bonus, i) => (
              <li key={i}>
                {bonus}
              </li>
            )) : null}
          </ul>
          <p><strong>Ability Modifiers: </strong></p>
          <ul>
          {this.state.abilityMods ? this.state.abilityMods.map((mod, i) => (
              <li key={i}>
                {JSON.stringify(mod)}
              </li>
            )) : null}
          </ul>
        {/*  */}
        
        <ReactJson
        src={this.state.race}
        name={this.state.race.name || null}
        collapsed="1" enableClipboard={false}
        displayDataTypes={false}
        theme="apathy"
        />
        </div>
      </div>
    );
  }
}

export default SelectRace;
