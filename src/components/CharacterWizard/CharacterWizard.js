import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SelectRace from './Steps/SelectRace/SelectRace';

class CharacterWizard extends Component {

  render() {
    return (
      <div>
      <div>
        Character Creator:
          </div>
          <SelectRace/>
          {/* <Switch>
            <Route path="/wizard/select-race" component={SelectRace} />
          </Switch> */}
        </div>
    )
  }
}

export default CharacterWizard;