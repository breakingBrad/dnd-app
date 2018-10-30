import React from 'react';
import { Route } from 'react-router-dom';
import WizardStart from './Steps/WizardStart/WizardStart';
import SelectRace from './Steps/SelectRace/SelectRace';
import SelectClass from './Steps/SelectClass/SelectClass';
import SelectAbilityScores from './Steps/SelectAbilityScores/SelectAbilityScores';
import Description from './Steps/Description/Description';
import './CharacterWizard.css';

const CharacterWizard = () => {
  return (
    <div>
      <div className="wizard-container">
          <Route path="/character-wizard/0" component={ WizardStart } />
          <Route path="/character-wizard/1" component={ SelectRace } />
          <Route path="/character-wizard/2" component={ SelectClass } />
          <Route path="/character-wizard/3" component={ SelectAbilityScores } />
          <Route path="/character-wizard/4" component={ Description } />
      </div>
    </div>
  );
};

export default CharacterWizard;
