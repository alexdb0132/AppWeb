import express, { json } from 'express';

const app = express();
app.use(express.json());

const pieces = [{
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

const categories = [
  "Disco",
  "pop",
  "rock"
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
  const nouvelleCategoire = requete.body;

  if(nouvelleCategoire === undefined)
  {
    reponse.send("il manque un champ obligatoire ")   
  }
  categories.push(nouvelleCategoire);
});

app.post('/api/pieces/:id/modifier', (requete,reponse) =>
{
  let piecesModifier = pieces.slice();
  piecesModifier.map(pieceMod => {
      if (pieceMod.titre == requete.params.id){
        pieceMod = requete.body
      }
  })
  reponse.json(piecesModifier);
})

app.delete('api/pieces/:id/supprimer', (requete,reponse) =>
{
  let indexASupprimer = pieces.findIndex( piece => piece.titre==requete.params.id);
  while (indexASupprimer > -1) {
    pieces.splice(indexASupprimer, 1);
    indexASupprimer = pieces.findIndex( piece => piece.Categorie==requete.params.id);
  }
  reponse.json(pieces)
});


// -------------------------------

app.get('/api/pieces', (requete,reponse) =>{
  let piecesOrdreCategorie = pieces.slice()
  piecesOrdreCategorie.sort((element1,element2) => (element1.Categorie > element2.Categorie) ? 1: -1)

  reponse.status(200).json(piecesOrdreCategorie)
})

app.get('/api/categories', (requete,reponse) =>{ reponse.status(200).json(categories)})

app.post('/api/pieces/ajouter', (requete,reponse) =>{
  const {titre,artiste,categorie} = requete.body;

  if (titre == null || artiste == null ||categorie ==null ) {
    reponse.send("il manque un champ obligatoire ")    
  }
  else{
    pieces.push(requete.body)
    reponse.json(pieces)
  }
  
})
app.post('/api/categories/:id/modifier', (requete, reponse) =>{
  let piecesCategorieModifier = pieces.slice();
  piecesCategorieModifier.map(catMod => {
      if (catMod.Categorie == requete.params.id){
        catMod.Categorie = requete.body.Categorie
      }
  })
  reponse.json(piecesCategorieModifier)
})

app.delete('/api/categories/:id/supprimer',(requete, reponse)=>{
  let indexASupprimer = pieces.findIndex( piece => piece.Categorie==requete.params.id);
    while (indexASupprimer > -1) {
      pieces.splice(indexASupprimer, 1);
      indexASupprimer = pieces.findIndex( piece => piece.Categorie==requete.params.id);
    }
    reponse.json(pieces)
  })


app.listen(8000,() => console.log('ecoute le port 8000'));