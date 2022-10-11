import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import history from './history'
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Project from './pages/Project'
import Contact from './pages/Contact'

import { Container } from './styles'


function App() {
  return (
    <Router history={history}>
      <Container>

        <Navbar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Project} />
          <Route exact path='/contact' component={Contact} />
        </Switch> 

      </Container>
    </Router>
  );
}

export default App;
