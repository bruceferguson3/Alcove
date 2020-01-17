import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cards = ({ img, name, role, github, linkedin }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://via.placeholder.com/200x160" />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{role}</Card.Text>
    </Card.Body>
    <Card.Body>
      <Button variant="outline-primary" className="it-btn-cards" href={`https://www.github.com/${github}`}>
        Github
      </Button>
      <Button variant="outline-primary" className="it-btn-cards" href={`https://www.linkedin.com/in/${linkedin}`}>
        LinkedIn
      </Button>
    </Card.Body>
  </Card>
);

export default Cards;
