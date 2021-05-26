import React from "react"
import { render } from '@testing-library/react';
import PageAccueil from "./PageAccueil"

test('Affiche message bienvenu', () => {
  const {getByText} = render(<PageAccueil />);
  const interieurbalisep = getByText(/Affichez et gérez/);
  expect(interieurbalisep).toBeInTheDocuments();
});
