import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';

function PageCategories(){
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const chercherDonnees = async () => {
      const resultat = await fetch(`api/categories`);
      const body = await resultat.json();
      setCategories(body);
    }
    chercherDonnees();
  }, []);

  function AjouterCategorie(p_categorie){
    const nouveauTableau = categories.slice();

    nouveauTableau.push(p_categorie);

    setCategories(nouveauTableau);

  }

  function ModifierCategorie(p_categorie,p_nouvelleCategorie){
    const nouveauTableau = categories.slice();
    const index = nouveauTableau.findIndex(categorie => categorie === p_categorie);

    nouveauTableau.splice(index,1,p_nouvelleCategorie);
    setCategories(nouveauTableau);
  }

  function SupprimerCategorie(p_categorie){
    fetch(`/api/categories/${p_categorie}/supprimer`, { method: 'DELETE' });
  }

  const options = {
    ajouter : <AfficherAjouterCategorie AjouterCategorie={AjouterCategorie}/>,
    modifier : <AfficherModifierCategorie categories={categories} ModifierCategorie={ModifierCategorie}/>,
    supprimer : <AfficherSupprimerCategorie categories={categories} SupprimerCategorie={SupprimerCategorie}/>
  };

  return (
    <>
    <Tab.Container>
    <Row>
      <Col>
      <br/>
        <ListGroup defaultActiveKey="" >
          {
            Object.keys(options).map(optionCourante => 
                <ListGroup.Item action href={`#${optionCourante}`}>{optionCourante}</ListGroup.Item>
            )
          }
        </ListGroup>
      </Col>
      <Col>
        <Tab.Content>
          {
            Object.keys(options).map(optionCourante => 
              <Tab.Pane eventKey={`#${optionCourante}`}>
                {options[optionCourante]}
              </Tab.Pane>
            )
          }
        </Tab.Content>
      </Col>
    </Row>
    </Tab.Container>
    </>
  );
}

function AfficherAjouterCategorie({ AjouterCategorie }){
  const [categorieAAjouter, setCategorie] = useState("");

  return (
    <>
      <Form>
        <Form.Group>
        <Form.Label>Ajouter une cat??gorie</Form.Label>
        <br/>
        <Form.Control size="small" type="text" onChange={(event) => setCategorie(event.target.value)}/>
        </Form.Group>
      </Form>
      <br/>
      <Button onClick={() => AjouterCategorie(categorieAAjouter)}>
          Ajouter
      </Button>
    </>
  );
}

function AfficherModifierCategorie({ categories, ModifierCategorie }){
  const [categorieSelectionner, setCategorie] = useState(categories[0]);
  let nouvelleCategorie;

  return (
    <>
      <Form>
        <Form.Group>
        <Form.Label>Modifier une cat??gorie</Form.Label>
        <Form.Control as="select" value={categorieSelectionner} onChange={e => setCategorie(e.target.value)}>
          {
            categories.map(categorie => 
                <option value={`${categorie}`}>{categorie}</option>
              )
          }
        </Form.Control>
        <br/>
        <Form.Control size="small" type="text" placeholder="" onChange={e => nouvelleCategorie = e.target.value}/>
        </Form.Group>
      </Form>
      <br/>
      <Button onClick={() => ModifierCategorie(categorieSelectionner,nouvelleCategorie)}>
          Modifier
      </Button>
    </>
  );
}

function AfficherSupprimerCategorie({ categories, SupprimerCategorie }){
  const [categorieSelectionner, setCategorie] = useState(categories[0]);

  return (
    <>
      <Form>
        <Form.Group>
        <Form.Label>Supprimer une cat??gorie</Form.Label>
        <Form.Control as="select" value={categorieSelectionner} onChange={e => setCategorie(e.target.value)}>
          {
            categories.map(categorie => 
                <option value={`${categorie}`}>{categorie}</option>
              )
          }
        </Form.Control>
        
        </Form.Group>
      </Form>
      <br/>
      <Button onClick={() => SupprimerCategorie(categorieSelectionner)}>
          Supprimer
      </Button>
    </>
  );
}

export default PageCategories;