import React from 'react';
import Table from 'react-bootstrap/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import 'bootstrap/dist/css/bootstrap.min.css';

function PagePriveeDemandesSpeciales(){
    return (
        <>
            <AfficherDemandesSpecial/>
        </>
    );
}

function AfficherDemandesSpecial(){
    return (
        <>
            <h2>Chansons Selectionnées: </h2>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell align="center" >Nom</TableCell>
                    <TableCell align="center">Artiste</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                </TableBody>
            </Table>
        </>
    );
}

export default PagePriveeDemandesSpeciales;