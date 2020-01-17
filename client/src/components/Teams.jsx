import React, { useEffect } from 'react';
import Cards from './Cards.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Teams.css';

const Teams = props => {
  useEffect(() => {
    props.changePath('/teams');
  }, []);

  return (
    <>
      <Jumbotron fluid className="it-pagetitle-jt">
        <Container>
          <h1>Our Team</h1>
          <p>
            Team Alcove worked very hard on this project. We had a lot of fun while working and you couldn't ask for a better group of people to work
            with for one week on a product of this magnitude.
          </p>
        </Container>
      </Jumbotron>
      <Container className="it-teams-container">
        <Row>
          <Col>
            <Cards className="it-teams-card" img="" name="Natalia Malesa" role="Product Manager/Engineer" github="nmalesa" linkedin="nmalesa" />
          </Col>
          <Col>
            <Cards
              className="it-teams-card"
              img=""
              name="Tom Chandler"
              role="Architecture Owner/Engineer"
              github="tmchandler"
              linkedin="t-m-chandler"
            />
          </Col>
          <Col>
            <Cards className="it-teams-card" img="" name="Ish Tahir" role="UI Owner/Engineer" github="ishtahir" linkedin="ishtahir" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Cards className="it-teams-card" img="" name="Jonathan Diaz" role="Engineer" github="JCDiaz1201" linkedin="JCDiaz1201" />
          </Col>
          <Col>
            <Cards
              className="it-teams-card"
              img=""
              name="Bruce Ferguson"
              role="Engineer"
              github="bruceferguson3"
              linkedin="bruce-ferguson-81703473"
            />
          </Col>

          <Col>
            <Cards className="it-teams-card" img="" name="Mark Fuechec" role="Engineer" github="mfuechec" linkedin="mfuechec" />
          </Col>
        </Row>
        <Row className="justify-content-lg-center">
          <Col>
            <Cards className="it-teams-card" img="" name="Kytra Murphree" role="Engineer" github="KytraScript" linkedin="kytrascript" />
          </Col>

          <Col className="quack">
            <Cards className="it-teams-card" img="" name="2 Quack" role="Counselor" github="2quack" linkedin="2quack" />
          </Col>

          <Col>
            <Cards className="it-teams-card" img="" name="Tim Sanderson" role="Engineer" github="timsand" linkedin="timsand" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Teams;
