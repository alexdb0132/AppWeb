import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function PageRepertoire()
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
        <h1>Repertoire: </h1>
            <Table striped bordered hover>
                <thead>
                    <th>Titre</th>
                    <th>Artiste</th>
                    <th>Categorie</th>
                </thead>
                <tbody>
                {repertoire.map(piece => <tr>
                    <td>{piece.titre}</td>
                    <td>{piece.artiste}</td>
                    <td>{piece.categorie}</td>
                    </tr>)}
                </tbody>

            </Table>
        </>
    );
}

export default PageRepertoire;