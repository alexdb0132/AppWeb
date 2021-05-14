import express from 'express';

const app = express();

const pieces = {
    'Daddy': {
      'artiste': "Charlotte Cardin",
      'Categorie': "pop",
    },
    'Fever': {
        'artiste': "The McCoys",
        'Categorie': "rock",
      },
    'Peaches': {
        'artiste': "Justin Bieber",
        'Categorie': "pop",
    },
    'September': {
        'artiste': "Earth, Wind & fire",
        'Categorie': "Disco",
        },
};

app.get('/api/pieces/:id', (requete, reponse) =>
{
  let piece = pieces[requete.params.id];
  if(piece !=null) {
    reponse.status(200).json(piece);
  }
  else{
    reponse.status(200).json("piece non trouver");
  }
});

app.post('api/categories/ajouter',(requete, reponse) =>
{
  pieces[requete.body.id]= requete.body.artiste,requete.body.Categorie;
});

app.listen(8000,() => console.log('ecoute le port 8000'));