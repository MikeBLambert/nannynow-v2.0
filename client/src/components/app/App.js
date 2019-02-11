import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../auth/Auth';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={Auth} />
        <Route path="/signup" component={Auth} />
      </Switch>
    </Router>
  );
}
