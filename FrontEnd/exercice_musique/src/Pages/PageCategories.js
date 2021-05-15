import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';

const categories = [
  "pop",
  "rock",
  "disco"
];

const pieces = [
    {
      titre: 'Daddy',
      artiste: 'Charlotte Cardin',
      categorie: 'pop'
    },
    {
      titre: 'Fever',
      artiste: 'The McCoys',
      categorie: 'rock'
    },
    {
      titre: 'Peaches',
      artiste: 'Jusint Bieber',
      categorie: 'pop'
    },
    {
      titre: 'September',
      artiste: 'Earth, Wind, Fire',
      categorie: 'Disco'
    },
]

const options = [
  "ajouter",
  "modifier",
  "supprimer"
];

function PageCategories(){
  return (
    <>
    <Tab.Container>
    <Row>
      <Col>
        <ListGroup defaultActiveKey="" >
          {
            options.map(optionCourante => 
                <ListGroup.Item action href={`#${optionCourante}`}>{optionCourante}</ListGroup.Item>
            )
          }
        </ListGroup>
      </Col>
      <Col>
        <Tab.Content>
          {
            options.map(optionCourante => 
              <Tab.Pane eventKey={`#${optionCourante}`}>
                <AfficherCategorie option={optionCourante}/>
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

function AfficherCategorie({ option }){
  return (
    <>
      <Form>
        <Form.Group>
        <Form.Label>{option} une catégorie</Form.Label>
        <Form.Control size="small" type="text"/>
        </Form.Group>
      </Form>
      <Button>
          {option}
      </Button>
    </>
  );
}

export default PageCategories;