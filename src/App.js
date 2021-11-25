import Header from './components/Header.js';
import Students from './components/Students.js';
import Contact from './components/Contact.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div>
      <Header />
      <Router>
        <ul className="navbar">
          <li onClick={refreshPage}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Students">Student information</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/Students">
            <Students />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
