import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Navba from './navbar';
import './navbar.css';
import Home from './home';


function App() {
  return (
    <Router>
      <div >
          <Navba />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </div>
      
    </Router>
    
  );
}

export default App;


