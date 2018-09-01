import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import CharacterWizard from './components/CharacterWizard/CharacterWizard';

export default (
  <Switch>
    <Route exact path="/" component={ Auth } />
    <Route path="/dashboard" component={ Dashboard } />
    <Route path="/character-wizard" component={CharacterWizard} />
  </Switch>
)