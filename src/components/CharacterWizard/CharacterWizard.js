import React from 'react';
import SelectRace from './Steps/SelectRace/SelectRace';
import SelectClass from './Steps/SelectClass/SelectClass';
import SelectAbilityScores from './Steps/SelectAbilityScores/SelectAbilityScores';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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
          <Typography className="expansion-header"><b>Step : Finalize</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            {/* final step goes here */}
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className="wizard-expansion-panel" disabled={true}>
      <ExpansionPanelSummary className="expansion-summary" expandIcon={<ExpandMoreIcon />}>
      <Typography className="expansion-header"><b>Select Feats and Spells <i>( Coming Soon! )</i></b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className="wizard-expansion-panel" disabled={true}>
      <ExpansionPanelSummary className="expansion-summary" expandIcon={<ExpandMoreIcon />}>
          <Typography className="expansion-header"><b>Select Starting Equipment <i>( Coming Soon! )</i></b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        </ExpansionPanelDetails>
      </ExpansionPanel>
          {/* <br /> <br />
          <br /> <br />
          <SelectRace />
          <br /> <br />
          <SelectClass />
          <br /> <br />
          <SelectAbilityScores />
          <br /> <br /> */}
        </div>
    )
  }


export default CharacterWizard;