import React from 'react';
import './App.css';
import Home from './Components/Home';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


function App() {
  return (
    
      
        <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Register" component={Register}/>
          <Route path="/Dashboard" component={Dashboard}/>
        </Switch>
      </Router>
    
  );
}

export default App;
