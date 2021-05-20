import React, {useState, useEffect, setState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';




function PageModifierPiece({ match }){
    const identifiant = match.params.id;
    const [repertoire, setRepertoire] = useState([]);
    
    useEffect(() => {
        const chercherDonnes = async () => {
            const resultat = await fetch(`/api/pieces/${identifiant}`);
            const body = await resultat.json();
            setRepertoire(body);
        };
        chercherDonnes();
    }, []);
    var pieceRenvoye = repertoire
    console.log(pieceRenvoye)

    function modifierPiece()
    {
        fetch(`/api/pieces/${identifiant}/modifier`);
    }

    return (
        <>
        <h1>Modifier une pièce existante</h1>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Titre</Form.Label>
                            <Form.Control type="text" placeholder={`${pieceRenvoye.titre}`}/>
                            <br/>
                            <Form.Label>Artiste</Form.Label>
                            <Form.Control type="text" placeholder={`${pieceRenvoye.artiste}`}/>
                            <br/>
                            <Form.Label>Categorie</Form.Label>
                            <Form.Control type="text" placeholder={`${pieceRenvoye.categorie}`}/>
                        </Form.Group>
                        <br/>
                        
                        <Row>
                            <Col>
                            <Link to={`/admin`}><Button onClick={() => modifierPiece()}>Modifier</Button></Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default PageModifierPiece;