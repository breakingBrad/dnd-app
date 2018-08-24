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
    let options = this.props.options;
    options.forEach(function(obj){
      obj.label = obj.name;
      delete obj.name;
      obj.value = obj.url.substr(obj.url.lastIndexOf('/') + 1);
      delete obj.url;
    })
    this.setState({
      options: options.sort(),
      choices: this.props.choose,
      values: [],
    })
  }

  render() {
    return (
      <div>
        <br />
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
        <br />
      </div>
    )
  }
}

export default SelectProficiencies;