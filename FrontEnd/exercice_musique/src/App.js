import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import './App.css';

import BarreNavigation from './Navigation/BarreNavigation';
import PageAccueil from './Pages/PageAccueil';
import PageCategories from './Pages/PageCategories';

const pieces = [
  {
    titre: 'Daddy',
    artiste: 'Charlotte Cardin',
    categorie: 'pop'
  },
  {
    titre: 'Fever',
    artiste: 'The McCoys',
    categorie: 'rock'
  },
  {
    titre: 'Peaches',
    artiste: 'Jusint Bieber',
    categorie: 'pop'
  },
  {
    titre: 'September',
    artiste: 'Earth, Wind, Fire',
    categorie: 'Disco'
  },
]

function App() {

  return (
    <Router>
      <Container>
        <BarreNavigation/>
        <Route path="/" component={PageAccueil} exact/>
        <Route path="/categories" component={PageCategories} />
      </Container>
    </Router>
  );
}

export default App;
