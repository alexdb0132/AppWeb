import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid'
import { Checkbox } from 'semantic-ui-react'

//pour ajouter semantic: npm install semantic-ui-react semantic-ui-css
//pour ajouter material-ui: npm install @material-ui/core

function PageRepertoire()
{
    const [repertoireSelectionne, setrepertoireSelectionne] = useState([]);
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
        var nouveauRepertoire = repertoireSelectionne.slice();
        
        if(nouveauRepertoire.includes(piece))
        {
            var index = nouveauRepertoire.findIndex(pieceCour => pieceCour.titre === piece.titre);
            nouveauRepertoire.splice(index,1);
        }
        else
        {
            nouveauRepertoire.push(piece);
        }
        setrepertoireSelectionne(nouveauRepertoire);
    }

    return(
        <>
        <h1>Répertoire: </h1>
        <Grid container spacing={24}>
            <CardGroup>
                {
                    repertoire.map(piece => 
                        <Grid item md={3}>
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
                        </Grid>  
                    )
                }
            </CardGroup>
        </Grid>
        <br/>
        <h2>Chansons Selectionnées: </h2>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell align="center" >Nom</TableCell>
                <TableCell align="center">Artiste</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    repertoireSelectionne.map(piece =>
                        <TableRow>
                            <TableCell align="center">{piece.titre}</TableCell>
                            <TableCell align="center">{piece.artiste}</TableCell>
                        </TableRow>
                        )
                }
            </TableBody>
        </Table>
        </>
    );
}

export default PageRepertoire;