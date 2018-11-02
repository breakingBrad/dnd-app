import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import CharacterWizard from './components/CharacterWizard/CharacterWizard';
import Profile from './components/Profile/Profile';
import CharacterView from './components/Character/CharacterView';

export default (
  <Switch>
    <Route path="/character/:id" component={ CharacterView } />
    <Route path="/character-wizard" component={ CharacterWizard } />
    <Route path="/dashboard" component={ Dashboard } />
    <Route path="/user-profile" component={ Profile } />
    <Route exact path="/" component={ Auth } />
  </Switch>
)