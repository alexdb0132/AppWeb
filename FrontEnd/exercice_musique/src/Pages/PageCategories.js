import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';

const tableauCategories = [
  "pop",
  "rock",
  "disco"
];

function PageCategories(){
  const [categories, setCategories] = useState(tableauCategories);

  function AjouterCategorie(p_categorie){
    const nouveauTableau = categories.slice();

    nouveauTableau.push(p_categorie);

    setCategories(nouveauTableau);
  }

  function ModifierCategorie(p_categorie){
    alert(`Modifier pour ${p_categorie}`)
  }

  function SupprimerCategorie(p_categorie){
    
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
        <Form.Label>Ajouter une catégorie</Form.Label>
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
  const [categorieSelectionner, setCategorie] = useState("");

  return (
    <>
      <Form>
        <Form.Group>
        <Form.Label>Modifier une catégorie</Form.Label>
        <Form.Control as="select" value={categorieSelectionner} onChange={e => setCategorie(e.target.value)}>
          {
            categories.map(categorie => 
                <option value={`${categorie}`}>{categorie}</option>
              )
          }
        </Form.Control>
        <br/>
        <Form.Control size="small" type="text" value={categorieSelectionner}/>
        </Form.Group>
      </Form>
      <br/>
      <Button onClick={() => ModifierCategorie(categorieSelectionner)}>
          Modifier
      </Button>
    </>
  );
}

function AfficherSupprimerCategorie({ categories, SupprimerCategorie }){
  const [categorieSelectionner, setCategorie] = useState("");

  return (
    <>
      <Form>
        <Form.Group>
        <Form.Label>Supprimer une catégorie</Form.Label>
        <Form.Control as="select" value={categorieSelectionner} onChange={e => setCategorie(e.target.value)}>
          {
            categories.map(categorie => 
                <option value={`${categorie}`}>{categorie}</option>
              )
          }
        </Form.Control>
        <br/>
        <Form.Control size="small" type="text" value={categorieSelectionner}/>
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