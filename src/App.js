import React from 'react';
import { Switch, Route } from 'react-router-dom';
import game from './pages/Game';
import settings from './pages/Settings';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';
import Login from './pages/Login';
import SettingsProvider from './context/SettingsProvider';

export default function App() {
  return (
    <SettingsProvider>
      <Switch>
        <Route exact path="/trivia-game" component={ Login } />
        <Route path="/game" component={ game } />
        <Route path="/settings" component={ settings } />
        <Route path="/feedback" component={ Feedback } />
        <Route path="/ranking" component={ Ranking } />
      </Switch>
    </SettingsProvider>
  );
}
