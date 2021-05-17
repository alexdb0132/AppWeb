<<<<<<< Updated upstream
import React, {useState, useEffect} from 'react';

function PageAdmin()
{
    const [repertoire, setRepertoire] = useState({});
    
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
            <ul>
                {repertoire.map(piece => <li>{piece.titre}</li>)}
            </ul>
            <br/>
        </>
    );
}

=======
import React from 'react';

function PageAdmin({Repertoire})
{
    const repertoire = Repertoire;

    return(
        <>
            
        </>
    )
}

>>>>>>> Stashed changes
export default PageAdmin