import React from 'react';
import Auth from '../auth/Auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
