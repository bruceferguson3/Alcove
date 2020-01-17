import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ListingProductBullets from '../listing_page/ListingProductBullets.jsx';
import ListingMap from '../listing_page/ListingMap.jsx';

const PreviewProductInfo = props => {

  return (
    <Container>
      <Row>
        <Col>
          <h4>{props.previewListing.title}</h4>
          <h6>{props.previewListing.zip}</h6>
        </Col>
        <Col>
          <h4>${props.previewListing.filters.price}/day</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListingProductBullets bullets={props.previewListing.filters} />
        </Col>
        <Col>
          {props.previewListing.description}
        </Col>
      </Row>
      <Row>
        <ListingMap
          lat={props.previewListing.geoLocation[0]}
          lng={props.previewListing.geoLocation[1]}/>
      </Row>
    </Container>
  );
};

export default PreviewProductInfo;
