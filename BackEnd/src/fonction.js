

export function chercherpiece(pieceRechercher ,pieces)
{
  let pieceTrouvee = undefined;

  pieces.forEach(piece => {
    if(piece.titre === pieceRechercher)
    {
      pieceTrouvee = piece;
    }
  });
  return pieceTrouvee;
}

export function organiserPiecesParcategorie(pieces)
{
  const piecesOrdreCategorie = pieces.slice();
  piecesOrdreCategorie.sort((element1,element2) => 
    (element1.categorie > element2.categorie) ? 1: -1);
    return piecesOrdreCategorie;
}
export function AfficherTousCategorie()
{
  return categories;
}

export function AjouterPiece(piece)
{
  const {titre, artiste, categorie} = piece;

  if (titre == null || artiste == null || categorie ==null ) {
    reponse.send("il manque un champ obligatoire ");  
  }
  else{
    pieces.push(piece)
  }
}