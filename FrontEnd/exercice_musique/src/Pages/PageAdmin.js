import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function PageAdmin()
{
    const [repertoire, setRepertoire] = useState([]);
    
    useEffect(() => {
        const chercherDonnes = async () => {
            const resultat = await fetch(`/api/pieces`);
            const body = await resultat.json();
            setRepertoire(body);
        };
        chercherDonnes();
    }, []);

    return(
        <>
            <Table striped bordered hover>
                {repertoire.map(piece => <tr><td>Titre: {piece.titre}, Artiste: {piece.artiste}, Categorie: {piece.categorie} <br/>
                <Button size="sm" active="true" variant="primary">Modifier</Button>
                <nbsp/>
                <Button size="sm" active="true" variant="primary" component={Link} to="/supprimer/Daddy">Supprimer</Button></td></tr>)}
            </Table>
        </>
    );
}

export default PageAdmin;