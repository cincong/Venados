import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/layouts/pages/Home';
import Statistics from './components/layouts/pages/Statistics';
import Players from './components/layouts/pages/Players';
import NotFoundPage from './components/layouts/pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/players" component={Players} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
