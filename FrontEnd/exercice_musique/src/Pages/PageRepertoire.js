import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageCategories from './PageCategories';

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
        <h1>Répertoire: </h1>
        <CardGroup>
            {
                repertoire.map(piece => 
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center">{piece.titre}</Card.Title>
                            <Card.Text  className="text-center">{piece.artiste}</Card.Text>
                            <Card.Text  className="text-center">
                                {piece.categorie}
                            </Card.Text>
                        </Card.Body>
                    </Card>    
                )
            }
        </CardGroup>
        </>
    );
}

export default PageRepertoire;