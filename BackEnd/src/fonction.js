

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