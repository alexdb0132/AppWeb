import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const pieceRenvoye = {
    titre: 'Daddy',
    artiste: 'Charlotte Cardin',
    categorie: 'pop'
};

function PageSupprimerPiece({match}){
    const identifiant = match.params.id;

    return(
        <>
            <h1>Supprimer une piece</h1>
            <Table striped bordered hover>
                <thead>
                    <th>Titre</th>
                    <th>Artiste</th>
                    <th>categorie</th>
                </thead>
                <tbody>
                    <td>{pieceRenvoye.titre}</td>
                    <td>{pieceRenvoye.artiste}</td>
                    <td>{pieceRenvoye.categorie}</td>
                </tbody>
            </Table>
            <Row>
                <Col>
                <Button>Supprimer</Button>
                </Col>
            </Row>
        </>
    )
}

export default PageSupprimerPiece;