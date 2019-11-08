import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Home from './components/home';

function App() {
  return (
    <div>
      <Router>
        <div>
          <header>
          <Navbar bg="light" expand="lg" style={{borderBottom:"solid 1px #dcdee0"}}>
              <Navbar.Brand href="/">Beacon App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link href="#home" style={{fontSize:"20px", color:"black"}}>Register</Nav.Link>
              <Nav.Link href="#link" style={{fontSize:"20px", color:"black"}}>Login</Nav.Link>
            </Navbar.Collapse>

            </Navbar>
          </header>
          <article className="article">
            <Switch>
              <Route path="/"><Home/></Route>
              
            </Switch>
          </article>

        </div>
      </Router>
    </div>
  );
}

export default App;
