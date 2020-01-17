import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import dummyData from './dummyData.js';
import PreviewProductInfo from './PreviewProductInfo.jsx';
import PreviewImages from './PreviewImages.jsx';
import ListingContactInfo from '../listing_page/ListingContactInfo.jsx';
import Listing from '../listing_page/Listing.jsx';
import ListingMap from '../listing_page/ListingMap.jsx';
import ListingImages from '../listing_page/ListingImages.jsx';

class PreviewListing extends React.Component {
  constructor(props) {
    super(props);
    let listing = dummyData.test.data;
    this.state = { listing: listing };
  }

  render() {
    return (
      <Container>
        <Row md={4}>
          <PreviewImages />
        </Row>
        <Row md={8}>
          <Col md={8}>
            <PreviewProductInfo listing={this.state.listing} />
          </Col>
          <Col md={4}>
            <Row>
              <ListingContactInfo />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

};

export default PreviewListing;
