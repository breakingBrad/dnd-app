import React, { Component } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { descriptionBuilder } from '../../../../ducks/reducers/reducer'
import Button from '../../../Button/Button'

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      raceId: props.raceId,
      race: props.race,
      abilityBonuses: props.abilityBonuses,
      classId: props.classId,
      dndClass: props.dndClass,
      proficiencyChoices: props.proficinecyChoices,
      classLevel: props.classLevel,
      level: props.level,
      chosenProficiencies: props.chosenProficiencies,
      str: props.str,
      dex: props.dex,
      con: props.con,
      int: props.int,
      wis: props.wis,
      cha: props.cha,
      name: '',
      gender: '',
      height: '',
      weight: '',
      age: '',
      hair: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    this.props.descriptionBuilder(this.state.name, this.state.gender, this.state.height, this.state.weight, this.state.age, this.state.hair);
    this.addCharacter();
  }
  
  addCharacter() {
    const newCharacter = {
      userId: '5b909f8898b2207e8467ceed',
      raceId: this.props.raceId,
      race: this.props.race,
      abilityBonuses: this.props.abilityBonuses,
      classId: this.props.classId,
      dndClass: this.props.dndClass,
      proficiencyChoices: this.props.proficinecyChoices,
      classLevel: this.props.classLevel,
      level: this.props.level,
      chosenProficiencies: this.props.chosenProficiencies,
      str: this.props.str,
      dex: this.props.dex,
      con: this.props.con,
      int: this.props.int,
      wis: this.props.wis,
      cha: this.props.cha,
      name: this.props.name,
      gender: this.props.gender,
      height: this.props.height,
      weight: this.props.weight,
      age: this.props.age,
      hair: this.props.hair,
    }
    console.log(newCharacter);
    axios.post(`/api/character/create`, newCharacter)
    .then(response => {
      this.props.history.push('/dashboard')
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="step-container">
        <div className="select-container">
          <Paper className="description-input-container">
          <div className="description-col-1">
            <TextField className="description-input"
              name="name" label="Character Name" value={this.state.name}
              type="text"
              onChange={this.handleChange} InputLabelProps={{ shrink: true, }} margin="normal"
            />
            <TextField className="description-input"
              name="gender" label="Gender" value={this.state.gender}
              type="text"
              onChange={this.handleChange} InputLabelProps={{ shrink: true, }} margin="normal"
            />
            <TextField className="description-input"
              name="hair" label="Hair" value={this.state.hair}
              type="text"
              onChange={this.handleChange} InputLabelProps={{ shrink: true, }} margin="normal"
            />
            </div>
            <div className="description-col-2">
            <TextField className="description-input"
              name="height" label="Height" value={this.state.height}
              type="text"
              onChange={this.handleChange} InputLabelProps={{ shrink: true, }} margin="normal"
            />
            <TextField className="description-input"
              name="weight" label="Weight" value={this.state.weight}
              type="text"
              onChange={this.handleChange} InputLabelProps={{ shrink: true, }} margin="normal"
            />
            <TextField className="description-input"
              name="age" label="Age" value={this.state.age}
              type="text"
              onChange={this.handleChange} InputLabelProps={{ shrink: true, }} margin="normal"
            />
            </div>
          </Paper>
        </div>
        <div className="save-changes-container">
          <Button 
            className="save-button"
            color="primary"
            variant="contained"
            onClick={e => this.handleSubmit()}
          >
          Save New Character
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  raceId: state.raceId,
  race: state.race,
  abilityBonuses: state.abilityBonuses,
  classId: state.classId,
  dndClass: state.dndClass,
  proficiencyChoices: state.proficinecyChoices,
  classLevel: state.classLevel,
  level: state.level,
  chosenProficiencies: state.chosenProficiencies,
  str: state.str,
  dex: state.dex,
  con: state.con,
  int: state.int,
  wis: state.wis,
  cha: state.cha,
  name: state.name,
  gender: state.gender,
  height: state.height,
  weight: state.weight,
  age: state.age,
  hair: state.hair,
  userId: state.userId,
})

export default connect(mapStateToProps, { descriptionBuilder }) (Description);
