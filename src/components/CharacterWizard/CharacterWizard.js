import React from 'react';
import SelectRace from './Steps/SelectRace/SelectRace';
import SelectClass from './Steps/SelectClass/SelectClass';
import SelectAbilityScores from './Steps/SelectAbilityScores/SelectAbilityScores';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Description from './Steps/Description/Description';
// import CheckboxList from '../CheckboxList/CheckboxList';


const CharacterWizard = () => {
  return (
    <div className="character-wizard-container">

      <ExpansionPanel className="wizard-expansion-panel">
        <ExpansionPanelSummary className="expansion-summary" expandIcon={<ExpandMoreIcon />}>
          <Typography className="expansion-header"><b>Step One: Race</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SelectRace />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className="wizard-expansion-panel">
        <ExpansionPanelSummary className="expansion-summary" expandIcon={<ExpandMoreIcon />}>
          <Typography className="expansion-header"><b>Step Two: Class</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SelectClass />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className="wizard-expansion-panel">
        <ExpansionPanelSummary className="expansion-summary" expandIcon={<ExpandMoreIcon />}>
          <Typography className="expansion-header"><b>Step Three: Ability Scores</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SelectAbilityScores />
        </ExpansionPanelDetails>
      </ExpansionPanel>


      <ExpansionPanel className="wizard-expansion-panel">
        <ExpansionPanelSummary className="expansion-summary" expandIcon={<ExpandMoreIcon />}>
          <Typography className="expansion-header"><b>Step Four: Details & Characteristics</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Description />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className="wizard-expansion-panel" disabled={true}>
        <ExpansionPanelSummary className="expansion-summary" expandIcon={<ExpandMoreIcon />}>
          <Typography className="expansion-header"><b>Select Spells <i>( Coming Soon! )</i></b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          Coming Soon!
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className="wizard-expansion-panel" disabled={true}>
        <ExpansionPanelSummary className="expansion-summary" expandIcon={<ExpandMoreIcon />}>
          <Typography className="expansion-header"><b>Select Equipment <i>( Coming Soon! )</i></b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          Coming Soon!
        </ExpansionPanelDetails>
      </ExpansionPanel>

      {/* <CheckboxList/> */}


    </div>
  )
}


export default CharacterWizard;