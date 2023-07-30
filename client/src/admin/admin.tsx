import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HeroForm from './components/HeroForm';
import ContentForm from './components/ContentForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route path="/hero-section" component={HeroForm} />
            <Route path="/contents-section" component={ContentForm} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
