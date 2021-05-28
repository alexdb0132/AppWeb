import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import PagePriveeDemandesSpeciales from './PagePriveeDemandesSpeciales';

function PageAdmin()
{
    const [repertoire, setRepertoire] = useState([]);
    const [pageAffichee, setPage] = useState("");
    
    useEffect(() => {
        const chercherDonnes = async () => {
            const resultat = await fetch(`/api/pieces`);
            const body = await resultat.json();
            setRepertoire(body);
        };
        chercherDonnes();
    }, []);

    function ChangerDePage(p_page){
        setPage(p_page);
    }

    let page = <AfficherTableModifierSupprimer repertoire={repertoire} ChangerDePage={ChangerDePage}/>;
 
    if("admin" === pageAffichee){
        page = <AfficherTableModifierSupprimer repertoire={repertoire} ChangerDePage={ChangerDePage}/>
    }
    else if("privee" === pageAffichee){
        page = <AfficherPageePrivee ChangerDePage={ChangerDePage}/>
    }
    
    return(
        <>
            {page}
        </>
    );
}

function AfficherTableModifierSupprimer({ repertoire, ChangerDePage }){
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <th>Titre</th>
                    <th>Artiste</th>
                    <th>Categorie</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {repertoire.map((piece, index) => 
                    <tr>
                        <td>{piece.titre}</td>
                        <td>{piece.artiste}</td>
                        <td>{piece.categorie}</td>
                        <td>
                            <Link key={index} to={`/modifier/${piece.titre}`}><Button size="sm" active="true" variant="primary" >Modifier</Button></Link>
                            &nbsp;
                            <Link key={piece.titre} to={`/supprimer/${piece.titre}`}><Button size="sm" active="true" variant="primary" >Supprimer</Button></Link>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
            <br/>
            <h2>Se rendre sur la page des demandes spéciales</h2>
            <Button onClick={() => ChangerDePage("privee")}>Rediriger</Button>
        </>
    );
}

function AfficherPageePrivee({ ChangerDePage }){
    return (
        <>
          <PagePriveeDemandesSpeciales/>
          <br/>
          <h2>Revenir à la page administrateur</h2>
          <Button onClick={() => ChangerDePage("admin")}>Rediriger</Button>
        </>
    );
}

export default PageAdmin;