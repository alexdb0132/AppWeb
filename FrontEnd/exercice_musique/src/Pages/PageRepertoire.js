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
            <Table striped bordered hover>
                {repertoire.map(piece => <tr><td>Titre: {piece.titre}, Artiste: {piece.artiste}, Categorie: {piece.categorie} <br/></td></tr>)}
            </Table>
        </>
    );
}

export default PageRepertoire;