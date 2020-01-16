import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Cards = ({ img, name, role, desc, responsibilities, github, linkedin }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://via.placeholder.com/200x160" />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{role}</Card.Text>
      <Card.Text>{desc}</Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      {responsibilities.map(responsibility => (
        <ListGroupItem>{responsibility}</ListGroupItem>
      ))}
    </ListGroup>
    <Card.Body>
      <Card.Link href={`https://www.github.com/${github}`}>Github</Card.Link>
      <Card.Link href={`https://www.linkedin.com/in/${linkedin}`}>LinkedIn</Card.Link>
    </Card.Body>
  </Card>
);

export default Cards;
