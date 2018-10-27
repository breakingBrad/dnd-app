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
      chosenProficienciesProps: props.chosenProficienciesProps,
    }
  }

  handleChange = (values) => {
    this.setState({ values });
    this.props.proficienciesBuilder(this.state.values);
  }

  componentWillMount() {
    if (this.props.chosenProficienciesProps) {
      this.setState({
        options: this.props.options,
        values: [],
        choices: this.props.choose,
        chosenProficiencesProps: this.props.chosenProficienciesProps,
      })
    }
  }


  componentDidMount(props) {
    let formattedOptions = this.props.options.map(function (obj) {
      return {
        label: obj.name,
        value: obj.url.substr(obj.url.lastIndexOf('/') + 1),
      }
    })
    if (!this.props.chosenProficienciesProps) {
      this.setState({
        options: formattedOptions.sort(),
        choices: this.props.choose,
        values: [],
      })
    } else {
      const values = this.props.chosenProficienciesProps;
      this.setState({
        options: formattedOptions.sort(),
        choices: this.props.choose,
        values: values,
      })
    }
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
          onChange={values => this.handleChange(values)}
          onBlur={() => this.props.proficienciesBuilder(this.state.values)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  chosenProficiencies: state.values,
});

export default connect(mapStateToProps, { proficienciesBuilder })(SelectProficiencies);