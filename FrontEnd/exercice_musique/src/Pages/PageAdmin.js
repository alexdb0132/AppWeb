import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

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
<<<<<<< Updated upstream
                {repertoire.map(piece => <tr><td>Titre: {piece.titre}, Artiste: {piece.artiste}, Categorie: {piece.categorie} <br/>
                <Button size="sm" active="true" variant="primary">Modifier</Button>
                <nbsp/>
                <Button size="sm" active="true" variant="primary" component={Link} to="/supprimer/Daddy">Supprimer</Button></td></tr>)}
=======
                {repertoire.map((piece, index) => <tr><td>Titre: {piece.titre}, Artiste: {piece.artiste}, Categorie: {piece.categorie} <br/>
                <Link key={index} to={`/modifier/${index}`}><Button size="sm" active="true" variant="primary" >Modifier</Button></Link>
                <nbsp/>
                <Button size="sm" active="true" variant="primary" >Supprimer</Button></td></tr>)}
>>>>>>> Stashed changes
            </Table>
        </>
    );
}

export default PageAdmin;