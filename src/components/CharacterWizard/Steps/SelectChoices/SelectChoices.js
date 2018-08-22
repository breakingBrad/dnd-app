import React, { Component } from 'react';
import Select from 'react-select';

class SelectChoices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOptions: null,
      options: [],
      choices: '',
      loading: true,
      values: [],
      proficiencyChoices: props.proficiencyChoices,
    }
  }

  handleChange = (selectedOption) => {
    this.setState({
      selectedOption,
      classId: selectedOption.value,
    });
    console.log(`Option selected:`, selectedOption);
  }

  // componentDidMount(props) {
  //   let options = this.props.from;
  //   options.forEach(function(obj){
  //     obj.label = obj.name;
  //     delete obj.name;
  //     obj.value = obj.url.substr(obj.url.lastIndexOf('/') + 1);
  //     delete obj.url;
  //   })
  //   this.setState({
  //     options: options.sort(),
  //     choices: this.props.choose,

  //   })
  // }

  render() {
    
    return (
      <div>
        <b>Choose: </b>{this.props.choose}
        {JSON.stringify(this.props)}
        {/* <Select
          isMulti
          options={this.state.options}
          placeholder={'Select ...'}
          closeMenuOnSelect={false}
          value={this.selectOptions}
        /> */}


        {/* Below is how to limit the # of multi to select */}
        {/* <Select
          closeMenuOnSelect={false}
          value={this.state.values}
          onChange={ values => this.setState({ values })}
          options={
            this.state.values.length >= this.state.choose ?
              this.state.values :
              this.state.selectedOptions
            }
          placeholder={''}
          isMulti
        />
         */}
      </div>
    )
  }
}

export default SelectChoices;