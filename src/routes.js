import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import CharacterWizard from './components/CharacterWizard/CharacterWizard';
import Profile from './components/Profile/Profile';

export default (
  <Switch>
    <Route exact path="/" component={ Auth } />
    <Route path="/character-wizard" component={ CharacterWizard } />
    <Route path="/dashboard" component={ Dashboard } />
    <Route path="/user-profile" component={ Profile } />
  </Switch>
)