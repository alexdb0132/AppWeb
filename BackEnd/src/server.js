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



app.listen(8000,() => console.log('ecoute le port 8000'));