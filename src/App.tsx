import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import StorePage from './pages/Store';
import FormPage from './pages/Form';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/store' component={StorePage} />
        <Route exact path='/form' component={FormPage} />
      </Switch>
    </Router>
  );
}

export default App;
