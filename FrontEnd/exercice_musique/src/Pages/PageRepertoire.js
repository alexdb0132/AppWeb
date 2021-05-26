import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageCategories from './PageCategories';
import { Checkbox } from 'semantic-ui-react'

//pour ajouter semantic: npm install semantic-ui-react semantic-ui-css
//pour ajoueter material-ui: npm install @material-ui/core


function PageRepertoire()
{
    const [repertoireSelectionner, setrepertoireSelectionner] = useState([]);
    const [repertoire, setRepertoire] = useState([]);
    
    useEffect(() => {
        const chercherDonnes = async () => {
            const resultat = await fetch(`/api/pieces`);
            const body = await resultat.json();
            setRepertoire(body);
        };
        chercherDonnes();
    }, []);

    function ajouterSelection(piece){
        var nouveaurepertoire = repertoireSelectionner.slice();
        if(nouveaurepertoire.includes(piece))
        {
            nouveaurepertoire.splice(nouveaurepertoire.indexOf(piece))
        }
        else
        {
            nouveaurepertoire.push(piece);
        }
        setrepertoireSelectionner(nouveaurepertoire);
    }

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
                            <Card.Text  className="text-center">
                            <Checkbox onClick={() => ajouterSelection(piece)}/>
                            </Card.Text>
                        </Card.Body>
                    </Card>    
                )
            }
        </CardGroup>
        <br/>
        <h2>Chansons Selectionner: </h2>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell align="center" >Nom</TableCell>
                <TableCell align="center">Artiste</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    repertoireSelectionner.map(piece =>
                        <TableRow>
                            <TableCell align="center">{piece.titre}</TableCell>
                            <TableCell align="center">{piece.artiste}</TableCell>
                        </TableRow>
                        )
                }
            </TableBody>
            {
                repertoireSelectionner.map(piece =>
                    <th></th>
                    )
            }
        </Table>
        </>
    );
}

export default PageRepertoire;