import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      height: '',
      weight: '',
      age: '',
      hair: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // this.setstate({});
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
      </div>
    );
  }
}

export default Description;
