import React from 'react';
import { Route } from 'react-router-dom';
import SelectRace from './Steps/SelectRace/SelectRace';
import SelectClass from './Steps/SelectClass/SelectClass';
// import SelectProficiencies from './Steps/SelectProficiencies/SelectProficiencies';
import SelectAbilityScores from './Steps/SelectAbilityScores/SelectAbilityScores';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Description from './Steps/Description/Description';
import NavBar from '../NavBar/NavBar';
import './CharacterWizard.css';
import WizardStart from './Steps/WizardStart/WizardStart';

const CharacterWizard = () => {
  return (
    <div>
      <NavBar />
      <div className="wizard-container">
        <div className="poll-buttons slide-in-fwd-right" id="wizard-container">
          <Route path="/character-wizard/0" component={ WizardStart } />
          <Route path="/character-wizard/1" component={ SelectRace } />
          <Route path="/character-wizard/2" component={ SelectClass } />
          <Route path="/character-wizard/3" component={ SelectAbilityScores } />
          <Route path="/character-wizard/4" component={ Description } />
        </div>
      </div>

      {/* <div className="character-wizard-container">
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
   </div> */}
    </div>
  );
};

export default CharacterWizard;
