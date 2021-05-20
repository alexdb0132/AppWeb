import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function PageAjouterPiece(){
    return (
        <>
        <h1>Modifier une pièce existante</h1>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Titre</Form.Label>
                            <Form.Control type="text"/>
                            <br/>
                            <Form.Label>Artiste</Form.Label>
                            <Form.Control type="text"/>
                            <br/>
                            <Form.Label>Categorie</Form.Label>
                            <Form.Control type="text"/>
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

export default PageAjouterPiece;