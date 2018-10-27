import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';
import SelectProficiencies from '../SelectProficiencies/SelectProficiencies';
import Paper from '@material-ui/core/Paper';
import _ from 'lodash';
import { connect } from 'react-redux';
import { classBuilder, proficienciesBuilder } from '../../../../ducks/reducers/reducer'
import Button from '../../../Button/Button'

class SelectClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      options: [],
      classId: '',
      dndClass: [],
      proficiencyChoices: [],
      loading: true,
      classLevel: {},
      level: 1,
      chosenProficiencies: props.chosenProficiencies,
    }
  }

  componentWillMount() {
    this.getOptions();
    if (this.props.classId) {
      this.setState({
        classId: this.props.classId,
        dndClass: this.props.dndClass,
        proficiencyChoices: this.props.proficiencyChoices,
        classLevel: this.props.classLevel,
        level: this.props.level,
        chosenProficiencies: this.props.chosenProficiencies,
      })
    }
  }

  componentDidMount() {
    if (this.props.classId) {
      const value = { label: this.props.dndClass.name, value: this.props.classId };
      this.setState({
        classId: this.props.classId,
        dndClass: this.props.dndClass,
        proficiencyChoices: this.props.proficiencyChoices,
        classLevel: this.props.classLevel,
        level: this.props.level,
        selectedOption: value,
        chosenProficiencies: this.props.chosenProficiencies,
      })
    }
  }

  handleChange = (selectedOption, name, level) => {
    this.setState({
      selectedOption,
      classId: selectedOption.value,
      loading: true, 
      proficiencyChoices: [],
    })
    axios.get(`/api/dnd/classes/${selectedOption.value}`)
      .then(response => {
        this.setState({
          loading: false,
          dndClass: response.data,
          proficiencyChoices: response.data.proficiency_choices,
          chosenProficiencies: [],
        })
      })
      return axios.get(`/api/dnd/classes/${_.toLower(selectedOption.label)}/level/${this.state.level}`)
        .then(response => {
          this.setState({
            classLevel: response.data,
          })
          this.props.proficienciesBuilder([]);
        })
        .catch(err => {
          console.warn(err);
        });
  }

  getOptions() {
    axios.get(`/api/dnd/classes`)
    .then(response => {
      let options = response.data;
      this.setState({
        options: options.sort(),
      })
    })
      .catch(err => {
        console.warn(err);
      });
  }

  render() {
    const dndClass = this.state.dndClass;
    const proficiencySelect = this.state.proficiencyChoices
      .map((choices, i) => (
        <SelectProficiencies
          // {...proficiencySelect}
          data={this.state.proficiencyChoices}
          chosenProficienciesProps={this.props.chosenProficiencies}
          choose={this.state.proficiencyChoices[i].choose}
          options={this.state.proficiencyChoices[i].from}
          key={i}
        />
      ));
      const nextButton = 
       this.state.classId && this.props.chosenProficiencies.length > 0 ? (
        <span className="wizard-nav-next"><Button variant="contained" raised component={Link} to="/character-wizard/3" onClick={() => this.props.classBuilder(this.state.classId, this.state.dndClass, this.state.proficiencyChoices, this.state.classLevel, this.state.level)}>&rarr;</Button></span>
      ) : null;
    return (
      <div className="step-container">
        <div className="wizard-nav-container">
          <span className="wizard-nav-prev"><Button variant="contained" raised component={Link} to="/character-wizard/1">&larr;</Button></span>
          {nextButton}
        </div>
        <h1>Step Two: Select Class</h1>
        <p className="instructions">
        Choose a class in this step. Your choice of class broadly describes a character's vocation, what special talents he or she possesses, and the tactics he or she is most likely to employ when exploring a dungeon, fighting monsters, or engaging in a tense negotiation.
        </p>
        <p className="instructions">
        Your character's class will also determine their proficiencies. Your proficiencies define many of the things your character can do particularly well, from using certain weapons to telling a convincing lie.
        </p>
        <div className="select-container">
          <Select
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={this.state.options}
            placeholder={'Select Class...'}
            blurInputOnSelect={true}
          />
          <div className="display-selection-container">
            <Paper className="selection-img-container">
              <img className="display-img" src={require(`../../../../images/class-images/${this.state.classId ? this.state.classId : 'placeholder'}.jpeg`)} alt="race img" />
              <h2>{dndClass.name}</h2>
              <p><strong>Hit Die: </strong>d{dndClass.hit_die}</p>
              <p><strong>Saves: </strong>{this.state.dndClass.saving_throws ? this.state.dndClass.saving_throws.map((save, i) => ((i ? ', ' : '') + _.capitalize(save.name))) : null}</p>
            </Paper>
            <Paper className="display-selection">
              <p><strong>Proficiencies: </strong>{dndClass.proficiencies ? dndClass.proficiencies.map((proficiency, i) => ((i ? ', ' : '') + proficiency.name)) : null}</p>
              <p><strong>Features: </strong>{this.state.classLevel.features ? this.state.classLevel.features.map((feature, i) => ((i ? ', ' : '') + feature.name)) : null}</p>
            </Paper>
          </div>
            <Paper className="display-selection-proficiences">
              <strong>Proficiency Choices: </strong>
              {proficiencySelect}
            </Paper>
        </div>
        {/* <div className="save-changes-container">
          <Button 
            className="save-button"
            color="primary"
            variant="contained"
            onClick={() => this.props.classBuilder(this.state.classId, this.state.dndClass, this.state.proficiencyChoices, this.state.classLevel, this.state.level)}
          >
          Save Selection
          </Button> 
    </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  classId: state.classId,
  dndClass: state.dndClass,
  proficiencyChoices: state.proficiencyChoices,
  classLevel: state.classLevel,
  level: state.level,
  chosenProficiencies: state.chosenProficiencies,
});

export default connect(mapStateToProps, { classBuilder, proficienciesBuilder })(SelectClass);
