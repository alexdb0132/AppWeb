import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const pieceRenvoye = {
    titre: 'Daddy',
    artiste: 'Charlotte Cardin',
    categorie: 'pop'
};

function PageModifierPiece({ match }){
    const identifiant = match.params.id;

    return (
        <>
        <h1>Modifier une pièce existante</h1>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Titre</Form.Label>
                            <Form.Control type="text" value={`${pieceRenvoye.titre}`}/>
                            <br/>
                            <Form.Label>Artiste</Form.Label>
                            <Form.Control type="text" value={`${pieceRenvoye.artiste}`}/>
                            <br/>
                            <Form.Label>Categorie</Form.Label>
                            <Form.Control type="text" value={`${pieceRenvoye.categorie}`}/>
                        </Form.Group>
                        <br/>
                        <Row>
                            <Col>
                            <Button>Modifier</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default PageModifierPiece;