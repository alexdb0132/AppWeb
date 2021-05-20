import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';



function PageSupprimerPiece({match}){
    const identifiant = match.params.id;
    const [repertoire, setRepertoire] = useState([]);
    
    useEffect(() => {
        const chercherDonnes = async () => {
            const resultat = await fetch(`/api/pieces`);
            const body = await resultat.json();
            setRepertoire(body);
        };
        chercherDonnes();
    }, []);

    function supprimerPiece()
    {
        fetch(`/api/pieces/${identifiant}/supprimer`, { method: 'DELETE' });
    }
    return(
        <>
            <h1>{identifiant}</h1>
            <h1>Supprimer cette piece ?</h1>
            <Table striped bordered hover>
                <thead>
                    <th>Titre</th>
                </thead>
                <tbody>
                    <td>{identifiant}</td>
                </tbody>
            </Table>
            <Row>
                <Col>
                <Link to={`/admin`}><Button onClick={() => supprimerPiece()}>Supprimer</Button></Link>
                </Col>
            </Row>
        </>
    )
}

export default PageSupprimerPiece;