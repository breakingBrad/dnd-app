import React, { Component } from 'react';
import ReactJson from 'react-json-view'
import axios from 'axios';
import Select from 'react-select';
import Button from '../../../Button/Button'
import SelectProficiencies from '../SelectProficiencies/SelectProficiencies';

class SelectClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
      options: [],
      classId: '',
      class: [],
      proficiencyChoices: [],
      loading: true,
      classLevel: {},
      level: 1,
    }
  }

  handleChange = (selectedOption) => {
    this.setState({
      selectedOption,
      classId: selectedOption.value,
    });
  }

  componentDidMount() {
    this.getOptions();

  }

  getOptions() {
    axios.get(`http://localhost:4000/api/dnd/classes`)
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

  getData(e, id, name) {
    e.preventDefault();
    this.setState({ loading: true, proficiencyChoices: [] });
    axios.get(`http://localhost:4000/api/dnd/classes/${id}`)
      .then(response => {
        this.setState({
          loading: false,
          class: response.data,
          proficiencyChoices: response.data.proficiency_choices,
        })
      })
      // const proficiencyOptions = this.state.proficiencyChoices;
      return axios.get(`http://localhost:4000/api/dnd/classes/${name}/level/${this.state.level}`)
        .then(response => {
          this.setState({
            classLevel: response.data,
          })
        })
        .catch(err => {
          console.warn(err);
        });
    }

  render() {
    const proficiencySelect = this.state.proficiencyChoices
      .map((choices, i) => (
        <SelectProficiencies
          // {...proficiencySelect}
          data={this.state.proficiencyChoices}
          choose={this.state.proficiencyChoices[i].choose}
          options={this.state.proficiencyChoices[i].from}
          key={i}
        />
      ));
    return (
      <div>
        <strong>Step Two: Class</strong>
        <br/><br/>
        <div className="select-container">

        <Select
        value={this.selectedOption}
        onChange={this.handleChange}
        options={this.state.options}
        placeholder={'Select Class...'}
        />

        <Button
        type="submit"
        className="search-button"
        onClick={e => this.getData(e, this.state.classId, this.state.selectedOption.label.toLowerCase(), this.state.loading)}>
        Get Info
        </Button>
        </div>

        <div className="display-selection">
        {/*  */}
        <h2>{this.state.class.name}</h2>
        <p><strong>Hit Die: </strong>{this.state.class.hit_die}</p>
        <p><strong>Proficiencies: </strong>{this.state.class.proficiencies ? this.state.class.proficiencies.map((proficiency, i) => ((i ? ', ': '') + proficiency.name )) : null}</p>
        <p><strong>Features: </strong>{this.state.classLevel.features ? this.state.classLevel.features.map((feature, i) => ((i ? ', ': '') + feature.name )) : null}</p>

        {/* Rendering Proficiency Choices */}
        <strong>Proficiency Choices:</strong>
        {proficiencySelect}
        {/*  */}

        {/* Class Data */}
        <ReactJson
        src={this.state.class}
        name={this.state.class.name || null}
        collapsed="true" enableClipboard={false}
        displayDataTypes={false}
        theme="apathy"
        />
        {/*  */}

        {/* Class Level Data */}
        <ReactJson
        src={this.state.classLevel}
        name="Class Level Data"
        collapsed="true" enableClipboard={false}
        displayDataTypes={false}
        theme="apathy"
        />
        {/*  */}

        </div>
      </div>
    );
  }
}

export default SelectClass;
