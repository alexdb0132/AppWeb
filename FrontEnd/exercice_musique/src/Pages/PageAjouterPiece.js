import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function PageAjouterPiece(){
    const piece = 
        {
            titre:"",
            artiste: "",
            categorie: ""
        };

    function AjoutPiece(p_piece){
        let options = {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(p_piece)
        }
        
        fetch(`/api/pieces/ajouter`,options);
    }

    return (
        <>
        <h1>Ajouter une pièce</h1>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Titre</Form.Label>
                            <Form.Control type="text" onChange={e => piece.titre = e.target.value}/>
                            <br/>
                            <Form.Label>Artiste</Form.Label>
                            <Form.Control type="text" onChange={e => piece.artiste = e.target.value}/>
                            <br/>
                            <Form.Label>Catégorie</Form.Label>
                            <Form.Control type="text" onChange={e => piece.categorie = e.target.value}>
                            </Form.Control>
                        </Form.Group>
                        <br/>
                        <Row>
                            <Col>
                            <Link to={"/repertoire"}><Button onClick={() => AjoutPiece(piece)}>Ajouter</Button></Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default PageAjouterPiece;