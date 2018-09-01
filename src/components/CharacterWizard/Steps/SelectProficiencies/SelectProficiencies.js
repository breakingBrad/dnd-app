import React, { Component } from 'react';
import Select from 'react-select';

class SelectProficiencies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
      values: [],
    }
  }

  handleChange = (selectedOption) => {
    this.setState({
      selectedOption,
      classId: selectedOption.value,
    });
    console.log(`Option selected:`, selectedOption);
  }

  componentDidMount(props) {
    let formattedOptions = this.props.options.map(function (obj) {
      return {
        label: obj.name,
        value: obj.url.substr(obj.url.lastIndexOf('/') + 1),
      }
    })
    this.setState({
      options: formattedOptions.sort(),
      choices: this.props.choose,
      values: [],
    })
  }

  render() {
    return (
      <div className="proficiency-choices">
        <b>Choose: </b>{this.props.choose}
        <Select
          isMulti
          options={
            this.state.values.length < this.props.choose ?
              this.state.options : []
          }
          placeholder={'Select ...'}
          closeMenuOnSelect={false}
          value={this.state.values}
          onChange={values => this.setState({ values })}
        />
      </div>
    )
  }
}

export default SelectProficiencies;