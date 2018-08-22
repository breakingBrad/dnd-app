import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SelectRace from './Steps/SelectRace/SelectRace';
import SelectClass from './Steps/SelectClass/SelectClass';

class CharacterWizard extends Component {

  render() {
    return (
      <div>
      <div>
        Character Creator:
          </div>
          <SelectRace/>
          <br/><br/>
          <hr/>
          <br/><br/>
          {/* <Switch>
            <Route path="/wizard/select-race" component={SelectRace} />
          </Switch> */}
          <SelectClass/>
        </div>
    )
  }
}

export default CharacterWizard;