import React, { useEffect } from 'react';
import Cards from './Cards.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Teams.css';

const Teams = props => {
  useEffect(() => {
    changePath('/teams');
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Cards
            className="it-teams-card"
            img=""
            name="Natalia Malesa"
            role="Product Manager"
            desc=""
            responsibilities={[]}
            github="nmalesa"
            linkedin="nmalesa"
          />
        </Col>
        <Col>
          <Cards
            className="it-teams-card"
            img=""
            name="Tom Chandler"
            role="Architecture Owner"
            desc=""
            responsibilities={[]}
            github="tmchandler"
            linkedin="t-m-chandler"
          />
        </Col>
        <Col>
          <Cards
            className="it-teams-card"
            img=""
            name="Ish Tahir"
            role="UI Owner"
            desc=""
            responsibilities={[]}
            github="ishtahir"
            linkedin="ishtahir"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Cards
            className="it-teams-card"
            img=""
            name="Jonathon Diaz"
            role="Developer"
            desc=""
            responsibilities={[]}
            github="JCDiaz1201"
            linkedin="JCDiaz1201"
          />
        </Col>
        <Col>
          <Cards
            className="it-teams-card"
            img=""
            name="Bruce Ferguson"
            role="Developer"
            desc=""
            responsibilities={[]}
            github="bruceferguson3"
            linkedin="bruce-ferguson-81703473"
          />
        </Col>

        <Col>
          <Cards
            className="it-teams-card"
            img=""
            name="Mark Fuechec"
            role="Developer"
            desc=""
            responsibilities={[]}
            github="mfuechec"
            linkedin="mfuechec"
          />
        </Col>
      </Row>
      <Row className="justify-content-lg-center">
        <Col>
          <Cards
            className="it-teams-card"
            img=""
            name="Kytra Murphree"
            role="Developer"
            desc=""
            responsibilities={[]}
            github="KytraScript"
            linkedin="kytrascript"
          />
        </Col>

        <Col>
          <Cards
            className="it-teams-card"
            img=""
            name="Tim Sanderson"
            role="Developer"
            desc=""
            responsibilities={[]}
            github="timsand"
            linkedin="timsand"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Teams;
