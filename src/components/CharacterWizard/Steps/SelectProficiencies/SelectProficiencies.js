import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { proficienciesBuilder } from '../../../../ducks/reducers/reducer'


class SelectProficiencies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
      values: [],
      choices: '',
    }
  }

  handleChange = (selectedOption) => {
    this.setState({
      selectedOption,
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
          closeMenuOnSelect={true}
          value={this.state.values}
          onChange={values => this.setState({ values })}
          onBlur={() => this.props.proficienciesBuilder(this.state.values)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  chosenProficiencies: state.values,
});

export default connect(mapStateToProps, { proficienciesBuilder})(SelectProficiencies);