import express, { json } from 'express';

const app = express();
app.use(express.json());

const pieces = [{
      titre:'Daddy',
      artiste: "Charlotte Cardin",
      categorie: "pop"
    },
    {
      titre: "Fever",
      artiste: "The McCoys",
      categorie: "rock"
    },
    {
      titre:'Peaches',
      artiste: "Justin Bieber",
      categorie: "pop"
    },
    {
      titre: 'September',
      artiste: "Earth, Wind & fire",
      categorie: "Disco"
    }
];

const categories = [
  "Disco",
  "pop",
  "rock"
];

app.get('/api/pieces/:id', (requete, reponse) =>
{
  const pieceRechercher = requete.params.id;
  let pieceTrouvee = "";

  pieces.forEach(piece => {
    if(piece.titre === pieceRechercher)
    {
      pieceTrouvee = piece
    }
  });

  if(pieceTrouvee != null) {
    reponse.status(200).json(pieceTrouvee);
  }
  else{
    reponse.status(404).json("piece non trouver");
  }
});

app.post('/api/categories/ajouter',(requete, reponse) =>
{
  const nouvelleCategorie = requete.body;

  if(nouvelleCategorie === undefined)
  {
    reponse.send("il manque un champ obligatoire!")   
  }

  categories.push(nouvelleCategorie);
});

app.post('/api/pieces/:id/modifier', (requete,reponse) =>
{
  const titreRecherche = requete.params.id;
  const indexAModifier = pieces.findIndex(piece => piece.titre === titreRecherche);
  pieces[indexAModifier] = requete.body;

  reponse.status(202).json(pieces);
});

app.delete('/api/pieces/:id/supprimer', (requete,reponse) =>
{
  const titreRecherche = requete.params.id;
  let indexASupprimer = pieces.findIndex(piece => piece.titre === titreRecherche);
  pieces.splice(indexASupprimer,1);

  reponse.status(200).json(pieces);
});


// -------------------------------

app.get('/api/pieces', (requete,reponse) =>{
  const piecesOrdreCategorie = pieces.slice();

  piecesOrdreCategorie.sort((element1,element2) => 
    (element1.categorie > element2.categorie) ? 1: -1);

  reponse.status(200).json(piecesOrdreCategorie);
})

app.get('/api/categories', (requete,reponse) =>{ 
  reponse.status(200).json(categories)
})

app.post('/api/pieces/ajouter', (requete,reponse) =>{
  const {titre, artiste, categorie} = requete.body;

  if (titre == null || artiste == null || categorie ==null ) {
    reponse.send("il manque un champ obligatoire ");  
  }
  else{
    pieces.push(requete.body)
    reponse.status(201).json(pieces)
  }
  
})
app.post('/api/categories/:id/modifier', (requete, reponse) =>{
  let piecesCategorieModifier = pieces.slice();

  piecesCategorieModifier.map(catMod => {
    
      if (catMod.Categorie == requete.params.id){
        catMod.Categorie = requete.body.categorie
      }
  });

  reponse.status(200).json(piecesCategorieModifier);
})

app.delete('/api/categories/:id/supprimer',(requete, reponse) => {
    let indexASupprimer = categories.findIndex(categorie => categorie === requete.params.id);
    categories.splice(indexASupprimer,1);
  
    reponse.status(200).json(categories);
  });

app.listen(8000,() => console.log('ecoute le port 8000'));