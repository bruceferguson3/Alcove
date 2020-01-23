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
            <Cards
              className="it-teams-card"
              img="https://media-exp2.licdn.com/dms/image/C4E03AQEs_eC631Pdaw/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=v4hEaT_dryiOYdDNrBfPvlXtel9y0P5nEFgl29gmkQk"
              name="Natalia Malesa"
              role="Product Manager/Engineer"
              github="nmalesa"
              linkedin="nmalesa"
            />
          </Col>
          <Col>
            <Cards
              className="it-teams-card"
              img="https://media-exp2.licdn.com/dms/image/C4E03AQGH4VJ0cDF00g/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=AoNWfpglPyx3Hzz8NZ3P4-TtOhzeUiVLkqsobm0h8kE"
              name="Tom Chandler"
              role="Architecture Owner/Engineer"
              github="tmchandler"
              linkedin="t-m-chandler"
            />
          </Col>
          <Col>
            <Cards
              className="it-teams-card"
              img="https://media-exp2.licdn.com/dms/image/C4E03AQGOAdGdGXCJhQ/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=alDTCxS9L69eT7h-3wyakNNZmG7TcWFeh-sGQpCSciI"
              name="Ish Tahir"
              role="UI Owner/Engineer"
              github="ishtahir"
              linkedin="ishtahir"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Cards
              className="it-teams-card"
              img="https://media-exp2.licdn.com/dms/image/C5103AQEKHwlZsHNx4A/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=Q-HK-fKOTaUE8xQ6MM6CNDAPo_fbR5fOPKuW9pZJ_nw"
              name="Jonathan Diaz"
              role="Engineer"
              github="JCDiaz1201"
              linkedin="JCDiaz1201"
            />
          </Col>
          <Col>
            <Cards
              className="it-teams-card"
              img="https://media-exp2.licdn.com/dms/image/C4D03AQGajem99fQUCA/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=3BCbDN3qQ_uHaNMGe3Alk7tinLNYVM65ySc8l-qR53c"
              name="Bruce Ferguson"
              role="Engineer"
              github="bruceferguson3"
              linkedin="bruce-ferguson-81703473"
            />
          </Col>

          <Col>
            <Cards
              className="it-teams-card"
              img="https://media-exp2.licdn.com/dms/image/C5603AQHLyqNKuDSxZQ/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=r87WaQy2mDSUckN1YysKnkJgjlbvKQn5yP0HeS-37eY"
              name="Mark Fuechec"
              role="Engineer"
              github="mfuechec"
              linkedin="mfuechec"
            />
          </Col>
        </Row>
        <Row className="justify-content-lg-center">
          <Col>
            <Cards
              className="it-teams-card"
              img="https://media-exp2.licdn.com/dms/image/C4E03AQHbdUwLfRXpEw/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=oEWbncsan5NvbK4cNw2Rb4Z8K6wXWR_3A2jupyKlbQo"
              name="Kytra Murphree"
              role="Engineer"
              github="KytraScript"
              linkedin="kytrascript"
            />
          </Col>

          <Col className="quack">
            <Cards className="it-teams-card" img="" name="2 Quack" role="Counselor" github="2quack" linkedin="2quack" />
          </Col>

          <Col>
            <Cards
              className="it-teams-card"
              img="https://media-exp2.licdn.com/dms/image/C4E03AQGGF_zNzrflGg/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=5AzVNHLr952n6bb2c467kp0cq86RobDQVd6V9wCX9b8"
              name="Tim Sanderson"
              role="Engineer"
              github="timsand"
              linkedin="timsand"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Teams;
