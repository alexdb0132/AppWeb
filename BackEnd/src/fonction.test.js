import {chercherpiece} from './fonction';
import {organiserPiecesParcategorie} from './fonction'
import {AfficherTousCategorie} from './fonction'
import {AjouterPiece} from './fonction'

const pieces = [{
    titre:'Daddy',
    artiste: "Charlotte Cardin",
    categorie: ["pop"]
  },
  {
    titre: "Fever",
    artiste: "The McCoys",
    categorie: ["rock"]
  },
  {
    titre:'Peaches',
    artiste: "Justin Bieber",
    categorie: ["pop"]
  },
  {
    titre: 'September',
    artiste: "Earth, Wind & fire",
    categorie: ["Disco, pop"]
  }
];

const categories = [
  "Disco",
  "pop",
  "rock"
];

test("chercherpiece", () =>{
    expect(chercherpiece("Daddy",pieces)).toStrictEqual(    
    {"artiste": "Charlotte Cardin", "categorie": ["pop"], "titre": "Daddy"}
    );
    expect(chercherpiece("asdf",pieces)).toBe(undefined);
});

test("organiserPiecesParcategorie", () =>{
  expect(organiserPiecesParcategorie(pieces).toStrictEqual(
    [
      {
          "titre": "September",
          "artiste": "Earth, Wind & fire",
          "categorie": [
              "Disco, pop"
          ]
      },
      {
          "titre": "Peaches",
          "artiste": "Justin Bieber",
          "categorie": [
              "pop"
          ]
      },
      {
          "titre": "Daddy",
          "artiste": "Charlotte Cardin",
          "categorie": [
              "pop"
          ]
      },
      {
          "titre": "Fever",
          "artiste": "The McCoys",
          "categorie": [
              "rock"
          ]
      }
  ]
  ))
});

test("AfficherTousCategorie", ()=>{
  expect(AfficherTousCategorie())
})