import React, { Component } from 'react';
import ReactJson from 'react-json-view'
import axios from 'axios';
import Select from 'react-select';
import Button from '../../../Button/Button'
import SelectChoices from '../SelectChoices/SelectChoices';


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
    }
  }

  handleChange = (selectedOption) => {
    this.setState({
      selectedOption,
      classId: selectedOption.value,
    });
    console.log(`Option selected:`, selectedOption);
  }

  componentDidMount() {
    this.getOptions();
  }

  getOptions() {
    axios.get(`http://localhost:4000/api/dnd/classes`)
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
    axios.get(`http://localhost:4000/api/dnd/classes/${id}`)
      .then(response => {
        this.setState({
          loading: false,
          class: response.data,
          proficiencyChoices: response.data.proficiency_choices,
        })
      })
    }

  render() {
    const proficiencyChoices = this.state.proficiencyChoices
      .map((choices, i) => (
        <SelectChoices
          {...proficiencyChoices}
          key={i}
        />
      ));
    return (
      <div>
        <div className="select-container">
        <strong>Step Two: Select Class</strong>
        <br/><br/>
        <Select
        value={this.selectedOption}
        onChange={this.handleChange}
        options={this.state.options}
        placeholder={'Select Class...'}
        />
        <Button
        type="submit"
        className="search-button"
        onClick={e => this.getData(e, this.state.classId, this.state.loading)}>
        Get Info
        </Button>
        </div>
        <div className="display-selection">
        {/*  */}
        <h2>{this.state.class.name}</h2>
        <p><strong>Hit Die: </strong>{this.state.class.hit_die}</p>
        <p><strong>Proficiencies: </strong>{this.state.class.proficiencies ? this.state.class.proficiencies.map((proficiency, i) => ((i ? ', ': '') + proficiency.name )) : null}</p>
        {/* Rendering Proficiency Choices */}
        {proficiencyChoices}
        {/*  */}
        <ReactJson
        src={this.state.class}
        name={this.state.class.name || null}
        collapsed="1" enableClipboard={false}
        displayDataTypes={false}
        theme="apathy"
        />
        </div>
      </div>
    );
  }
}

export default SelectClass;
