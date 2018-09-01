import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
let id = 0;

class SelectAbilityScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      racialBonuses: [],
      str: '',
      dex: '',
      con: '',
      int: '',
      wis: '', 
      cha: '',
      strRaceBonus: 0,
      dexRaceBonus: 0,
      conRaceBonus: 0,
      intRaceBonus: 0,
      wisRaceBonus: 0, 
      chaRaceBonus: 0,
      strMod: 0,
      dexMod: 0,
      conMod: 0,
      intMod: 0,
      wisMod: 0, 
      chaMod: 0,
      strTotal: 0,
      dexTotal: 0,
      conTotal: 0,
      intTotal: 0,
      wisTotal: 0, 
      chaTotal: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.createRow = this.createRow.bind(this);
  }

  componentDidMount() {
    // this.setstate({});
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  createRow = (name, base, mod, racial, other, total) => {
    id +=1;
    return { id, name, base, mod, racial, other, total };
  }

  render() {
    let { str, dex, con, int, wis, cha, strRaceBonus , dexRaceBonus , conRaceBonus , intRaceBonus , wisRaceBonus  , chaRaceBonus } = this.state;
    const rows = [
      this.createRow('Strength', `${str}`, `${strRaceBonus}`, `${ str ? Math.ceil(( str -= 10 )/ 2) : 0}`, `${str ? (str += strRaceBonus += 10) : 0}`),
      this.createRow('Dexterity', `${dex}`,`${dexRaceBonus}`, `${ dex ? Math.ceil(( dex -= 10 )/ 2) : 0}`, `${dex ? (dex += dexRaceBonus += 10) : 0}`),
      this.createRow('Constitution', `${con}`,`${conRaceBonus}`, `${ con ? Math.ceil(( con -= 10 )/ 2) : 0}`, `${con ? (con += conRaceBonus += 10) : 0}`),
      this.createRow('Intelligence', `${int}`, `${intRaceBonus}`, `${ int ? Math.ceil(( int -= 10 )/ 2) : 0}`, `${int ? (int += intRaceBonus += 10) : 0}`),
      this.createRow('Wisdom', `${wis}`, `${wisRaceBonus}`, `${ wis ? Math.ceil(( wis -= 10 )/ 2) : 0}`, `${wis ? (wis += wisRaceBonus += 10) : 0}`),
      this.createRow('Charisma', `${cha}`,`${chaRaceBonus}`, `${ cha ? Math.ceil(( cha -= 10 )/ 2) : 0}`, `${cha ? (cha += chaRaceBonus += 10) : 0}`),
    ];

    return (
      <div className="step-container">
      <p>Instructions: Roll four six-sided-dice (d6) and drop the lowest value.  Add up the remaining three values and input the total for each ability.</p>
      <br /><br />
      <div>
      <Paper className="ability-input-container">
        <TextField type="number" className="ability-input" name="str" label="STR" value={this.state.str} onChange={this.handleChange} InputLabelProps={{ shrink: true, }} inputProps={{ min: "0", max: "18", }} margin="normal" defaultValue={0} />
        <TextField type="number" className="ability-input" name="dex" label="DEX" value={this.state.dex} onChange={this.handleChange} InputLabelProps={{ shrink: true, }} inputProps={{ min: "0", max: "18", }} margin="normal" defaultValue={0} />
        <TextField type="number" className="ability-input" name="con" label="CON" value={this.state.con} onChange={this.handleChange} InputLabelProps={{ shrink: true, }} inputProps={{ min: "0", max: "18", }} margin="normal" defaultValue={0} />
        <TextField type="number" className="ability-input" name="int" label="INT" value={this.state.int} onChange={this.handleChange} InputLabelProps={{ shrink: true, }} inputProps={{ min: "0", max: "18", }} margin="normal" defaultValue={0} />
        <TextField type="number" className="ability-input" name="wis" label="WIS" value={this.state.wis} onChange={this.handleChange} InputLabelProps={{ shrink: true, }} inputProps={{ min: "0", max: "18", }} margin="normal" defaultValue={0} />
        <TextField type="number" className="ability-input" name="cha" label="CHA" value={this.state.cha} onChange={this.handleChange} InputLabelProps={{ shrink: true, }} inputProps={{ min: "0", max: "18", }} margin="normal" defaultValue={0} />
      </Paper> 
      </div>
      <br /> <br />
      <Paper className="ability-table-container">
        <Table className="abilities-display">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Base Score</TableCell>
            <TableCell>Racial Bonus</TableCell>
            <TableCell>Modifier</TableCell>
            <TableCell>Total Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.base}</TableCell>
                <TableCell>{row.mod}</TableCell>
                <TableCell>{row.racial}</TableCell>
                <TableCell>{row.other}</TableCell>
                <TableCell>{row.total}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        </Table>
      </Paper>
      </div>
    );
  }
}

export default SelectAbilityScores;
