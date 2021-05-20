import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function PageAjouterPiece(){
    const [categories, setCategories] = useState([]);
    const [piece, setPiece] = useState(
        {
            titre:"",
            artiste: "",
            categorie: ""
        }
    );

    useEffect(() => {
        const chercherDonnees = async () => {
          const resultat = await fetch(`api/categories`);
          const body = await resultat.json();
          setCategories(body);
        }

        chercherDonnees();
    }, []);

    function ModifierTitre(p_titre){
        const nouvellePiece = Object.assign({}, piece);

        nouvellePiece.titre = p_titre;
        setPiece(nouvellePiece );
    }

    function ModifierArtiste(p_artiste){
        const nouvellePiece = Object.assign({}, piece);

        nouvellePiece.artiste = p_artiste;
        setPiece(nouvellePiece );
    }

    function ModifierCategorie(p_categorie){
        const nouvellePiece = Object.assign({}, piece);

        nouvellePiece.categorie = p_categorie;
        setPiece(nouvellePiece );
    }

    return (
        <>
        <h1>Ajouter une pièce</h1>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Titre</Form.Label>
                            <Form.Control type="text" onChange={(e) => ModifierTitre(e.target.value)}/>
                            <br/>
                            <Form.Label>Artiste</Form.Label>
                            <Form.Control type="text" onChange={(e) => ModifierArtiste(e.target.value)}/>
                            <br/>
                            <Form.Label>Catégorie</Form.Label>
                            <Form.Control as="select" onChange={e => ModifierCategorie(e.target.value)}>
                            {
                                categories.map(categorie => 
                                    <option value={`${categorie}`}>{categorie}</option>
                                )
                            }
                            </Form.Control>
                        </Form.Group>
                        <br/>
                        <Row>
                            <Col>
                            <Button>Ajouter</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default PageAjouterPiece;