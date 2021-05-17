import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';

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
                {repertoire.map(piece => <tr><td>Titre: {piece.titre}, Artiste: {piece.artiste}, Categorie: {piece.categorie}</td></tr>)}
            </Table>
        </>
    );
}

export default PageAdmin