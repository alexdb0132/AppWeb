import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';

const pieceRenvoye = {
    titre: 'Daddy',
    artiste: 'Charlotte Cardin',
    categorie: 'pop'
};

function PageModifierPiece(){
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Label>Titre</Form.Label>
                    <Form.Control type="text">{pieceRenvoye.titre}</Form.Control>
                    <Form.Label>Artiste</Form.Label>
                    <Form.Control type="text">{pieceRenvoye.artiste}</Form.Control>
                    <Form.Label>Catégorie</Form.Label>
                    <Form.Control type="text">{pieceRenvoye.categorie}</Form.Control>
                </Form.Group>
                <Button>Modifier</Button>
            </Form>
        </>
    );
}

export default PageModifierPiece;