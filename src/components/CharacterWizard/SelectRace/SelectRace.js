import React, { Component } from 'react';
import ReactJson from 'react-json-view'
import axios from 'axios';
import Select from 'react-select';
import Button from '../../Button/Button'


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
    console.log(`Option selected:`, selectedOption);
  }

  componentDidMount() {
    this.getOptions();
  }

  getOptions() {
    axios.get(`http://localhost:4000/api/dnd/races`)
      .then(response => {
        let options = response.data;
        options.forEach(function(obj){
          obj.label = obj.name;
          delete obj.name;
          obj.value = obj.url.substr(obj.url.lastIndexOf('/') + 1);
          delete obj.url;
        })
        this.setState({
          options: options.sort(),
        })
      })
      .catch(err => {
        console.warn(err);
      });
  }

  getData(e, id) {
    e.preventDefault();
    this.setState({loading: true});
    axios.get(`http://localhost:4000/api/dnd/races/${id}`)
      .then(response => {
        this.setState({
          loading: false,
          race: response.data
        })
      })
    }

  render() {
    return (
      <div>
        <div className="select-container">
        Step One: Select Race
        <br/><br/>
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
