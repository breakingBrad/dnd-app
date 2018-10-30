import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { abilitiesBuilder } from '../../../../ducks/reducers/reducer'
import Button from '../../../Button/Button'
let id = 0;

class SelectAbilityScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abilityBonuses: props.abilityBonuses,
      str: '',
      dex: '',
      con: '',
      int: '',
      wis: '',
      cha: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.createRow = this.createRow.bind(this);
  }

  componentDidMount() {
    this.setState({
      abilityBonuses: [0, 0, 0, 0, 0, 0],
    });
  }

  componentWillMount() {
    this.setState({
      abilityBonuses: this.props.abilityBonuses,
      str: this.props.str,
      dex: this.props.dex,
      con: this.props.con,
      int: this.props.int,
      wis: this.props.wis,
      cha: this.props.cha,
    })
  }

  handleChange(e) {
    if (e.target.value >= 0 && e.target.value <= 18) {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  createRow = (name, base, racial, mod, total) => {
    id += 1;
    return { id, name, base, racial, mod, total };
  }

  render() {
    const nextButton = 
      this.state.str && this.state.dex && this.state.con && this.state.int && this.state.wis && this.state.cha ? (
      <span className="wizard-nav-next"><Button variant="contained" raised component={Link} to="/character-wizard/4" onClick={() => this.props.abilitiesBuilder(this.state.str, this.state.dex, this.state.con, this.state.int, this.state.wis, this.state.cha)}>&rarr;</Button></span>
      ) : null;
    let { str, dex, con, int, wis, cha } = this.state;
    let abilityBonuses = this.props.abilityBonuses.length > 0 ? this.props.abilityBonuses.slice() : [0, 0, 0, 0, 0, 0];
    const rows = [
      this.createRow('Strength', `${str}`, `${abilityBonuses[0]}`, `${str ? Math.ceil((str -= 10) / 2) : 0}`, `${str += abilityBonuses[0] + 10}`),
      this.createRow('Dexterity', `${dex}`, `${abilityBonuses[1]}`, `${dex ? Math.ceil((dex -= 10) / 2) : 0}`, `${dex += abilityBonuses[1] + 10}`),
      this.createRow('Constitution', `${con}`, `${abilityBonuses[2]}`, `${con ? Math.ceil((con -= 10) / 2) : 0}`, `${con += abilityBonuses[2] + 10}`),
      this.createRow('Intelligence', `${int}`, `${abilityBonuses[3]}`, `${int ? Math.ceil((int -= 10) / 2) : 0}`, `${int += abilityBonuses[3] + 10}`),
      this.createRow('Wisdom', `${wis}`, `${abilityBonuses[4]}`, `${wis ? Math.ceil((wis -= 10) / 2) : 0}`, `${wis += abilityBonuses[4] + 10}`),
      this.createRow('Charisma', `${cha}`, `${abilityBonuses[5]}`, `${cha ? Math.ceil((cha -= 10) / 2) : 0}`, `${cha += abilityBonuses[5] + 10}`),
    ];

    return (
    <div className="step-container">
        <div className="wizard-nav-container">
          <span className="wizard-nav-prev"><Button variant="contained" raised component={Link} to="/character-wizard/2">&larr;</Button></span>
          {nextButton}
        </div>
        <h1>Step Three: Select Abilities</h1>
        <p className="instructions">
          Roll four six-sided-dice (d6) and drop the lowest value. Add up the remaining three values and input the total for each ability. The table below will use your entries along with your racial bonuses to calculate your total ability score and modifier.<br/>
          <br/> Individual ability score entries cannot be greater than '18'.
        </p>
        <Paper className="ability-input-container">
          <TextField type="number" className="ability-input" name="str" label="STR" value={this.state.str} onChange={this.handleChange} InputLabelProps={{ shrink: true }} inputProps={{ min: '0', max: '18' }} margin="normal" placeholder="0" />
          <TextField type="number" className="ability-input" name="dex" label="DEX" value={this.state.dex} onChange={this.handleChange} InputLabelProps={{ shrink: true }} inputProps={{ min: '0', max: '18' }} margin="normal" placeholder="0" />
          <TextField type="number" className="ability-input" name="con" label="CON" value={this.state.con} onChange={this.handleChange} InputLabelProps={{ shrink: true }} inputProps={{ min: '0', max: '18' }} margin="normal" placeholder="0" />
          <TextField type="number" className="ability-input" name="int" label="INT" value={this.state.int} onChange={this.handleChange} InputLabelProps={{ shrink: true }} inputProps={{ min: '0', max: '18' }} margin="normal" placeholder="0" />
          <TextField type="number" className="ability-input" name="wis" label="WIS" value={this.state.wis} onChange={this.handleChange} InputLabelProps={{ shrink: true }} inputProps={{ min: '0', max: '18' }} margin="normal" placeholder="0" />
          <TextField type="number" className="ability-input" name="cha" label="CHA" value={this.state.cha} onChange={this.handleChange} InputLabelProps={{ shrink: true }} inputProps={{ min: '0', max: '18' }} margin="normal" placeholder="0" />
        </Paper>
        <Paper className="ability-table-container">
          <Table className="abilities-display">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Base Score</TableCell>
                <TableCell>Racial Bonus</TableCell>
                <TableCell>Modifier</TableCell>
                <TableCell>Total Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => {
                return <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.base}</TableCell>
                    <TableCell>{row.racial}</TableCell>
                    <TableCell>{row.mod}</TableCell>
                    <TableCell>{row.total}</TableCell>
                  </TableRow>;
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  abilityBonuses: state.abilityBonuses,
  str: state.str,
  dex: state.dex,
  con: state.con,
  int: state.int,
  wis: state.wis,
  cha: state.cha,
})

export default connect(mapStateToProps, { abilitiesBuilder })(SelectAbilityScores);
