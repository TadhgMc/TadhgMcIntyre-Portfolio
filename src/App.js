import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import CompletedWork from './pages/CompletedWork';
import AboutMe from './pages/AboutMe';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/work' component={CompletedWork} />
        <Route exact path='/aboutme' component={AboutMe} />
      </Switch>
    </Router>
  );
}

export default App;
