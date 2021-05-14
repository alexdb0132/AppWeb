import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

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

function PageCategories(){
    return (
        <>
            <Row>
                <h1>Ajouter</h1>
                <Col><Button>Ajouter</Button></Col>
                <Col><Button>Modifier</Button></Col>
                <Col><Button>Supprimer</Button></Col>
            </Row>
        </>
    );
}

function AjouterCategorie(){
    return (
        <>
            
        </>
    );
}

function ModifierCategorie(){
//revoir doc bootstrap form.control select
}

function SupprimerCategorie(){
//revoir doc bootstrap form.control select
}

export default PageCategories;