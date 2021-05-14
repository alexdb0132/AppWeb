import express from 'express';

const app = express();

const pieces = [{
<<<<<<< Updated upstream
      titre:'Daddy',
      artiste: "Charlotte Cardin",
      Categorie: "pop"
    },
    {
      titre: "Fever",
      artiste: "The McCoys",
      Categorie: "rock"
    },
    {
      titre:'Peaches',
      artiste: "Justin Bieber",
      Categorie: "pop"
    },
    {
      titre: 'September',
      artiste: "Earth, Wind & fire",
      Categorie: "Disco"
    }
];

app.get('/api/pieces/:id', (requete, reponse) =>
{
  let pieceRechercher;
  pieces.forEach(piece => {
    if(piece.titre === requete.params.id)
    {
      pieceRechercher = piece
    }
  });
  if(pieceRechercher !=null) {
    reponse.status(200).json(pieceRechercher);
  }
  else{
    reponse.status(200).json("piece non trouver");
  }
});

app.post('/api/categories/ajouter',(requete, reponse) =>
{
  const nouvellePiece = requete.body;
=======
  titre:'Daddy',
  artiste: "Charlotte Cardin",
  Categorie: "pop"
},
{
  titre: "Fever",
  artiste: "The McCoys",
  Categorie: "rock"
},
{
  titre:'Peaches',
  artiste: "Justin Bieber",
  Categorie: "pop"
},
{
  titre: 'September',
  artiste: "Earth, Wind & fire",
  Categorie: "Disco"
}
];
>>>>>>> Stashed changes

  if(nouvellePiece.titre !== undefined && nouvellePiece.artiste !== undefined
    && nouvellePiece.Categorie !== undefined)
  {
    pieces.push(nouvellepiece);
  }
});

app.listen(8000,() => console.log('ecoute le port 8000'));