import React from "react";
import ListingProductBullets from "./ListingProductBullets.jsx";
import ListingMap from './ListingMap.jsx';
import { Container, Row, Col} from "react-bootstrap";

const ListingProductInfo = props => {
  return (
      <Container>
        <Row>
          <Col>
            <h4>{props.listing.title}</h4>
            <h6>{props.listing.zip}</h6>
          </Col>
          <Col>
            <h4>{props.listing.filters.price}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListingProductBullets bullets={props.listing.filters} />
          </Col>
          <Col>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </Col>
        </Row>
        <Row>
          <ListingMap />
        </Row>
      </Container>
  );
};

export default ListingProductInfo;
