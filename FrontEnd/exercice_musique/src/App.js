import React from 'react';
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import './App.css';

import BarreNavigation from './Navigation/BarreNavigation';
import PageAccueil from './Pages/PageAccueil';
import PageAdmin from './Pages/PageAdmin';
import PageCategories from './Pages/PageCategories';
import PageModifierPiece from './Pages/PageModifierPiece';
import PageSupprimerPiece from './Pages/PageSupprimerPiece';
import PageRepertoire from './Pages/PageRepertoire';
import PageAjouterPiece from './Pages/PageAjouterPiece';

function App() {
  return (
    <Router>
      <Container>
        <BarreNavigation/>
        <Route path="/" component={PageAccueil} exact/>
        <Route path="/repertoire" component={PageRepertoire} exact/>
        <Route path="/admin" component={PageAdmin} />
        <Route path="/ajouter" component={PageAjouterPiece} />
        <Route path="/categories" component={PageCategories} />
        <Route path="/modifier/:id" component={PageModifierPiece} />
        <Route path="/supprimer/:id" component={PageSupprimerPiece} />
      </Container>
    </Router>
  );
}

export default App;
