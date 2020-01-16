import React from "react";
import dummyData from "./dummyData.js";
import ListingProductInformation from "./ListingProductInfo.jsx";
import ListingContactInfo from "./ListingContactInfo.jsx";
import ListingImages from "./ListingImages.jsx";
import ListingMap from "./ListingMap.jsx";
import { Container, Row, Col } from "react-bootstrap";

class Listing extends React.Component {
  constructor(props) {
    super(props);
    let listing = dummyData.test.data;
    this.state = { listing: listing };
  }

  render() {
    return (
      <Container className='listingContainer' fluid>
        <Row md={4} id="listingImageContainer">
          <ListingImages fluid />
        </Row>
        <Row md={8}>
          <Col md={8} id="descriptionAndMapContainer">
            <ListingProductInformation listing={this.state.listing} />
          </Col>
          <Col md={4}>
            <Row>
              <div style={{ width: '70%' }}>
                <ListingContactInfo />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Listing;

// <Container>
//   <ListingImages />
//   <ListingProductInformation listing={this.state.listing} />
//   <ListingContactInfo />
// </ Container>
