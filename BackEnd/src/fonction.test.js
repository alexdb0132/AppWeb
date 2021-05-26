import {chercherpiece} from './fonction';

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

test("chercherpiece", () =>{
    expect(chercherpiece("Daddy",pieces)).toStrictEqual(    
    {"artiste": "Charlotte Cardin", "categorie": ["pop"], "titre": "Daddy"}
    );
    expect(chercherpiece("asdf",pieces)).toBe(undefined);
});