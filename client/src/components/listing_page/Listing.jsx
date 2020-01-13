import React from "react";
import dummyData from "./dummyData.js";
import ListingProductInformation from "./ListingProductInfo.jsx";
import ListingContactInfo from './ListingContactInfo.jsx';
import ListingImages from './ListingImages.jsx';
import ListingMap from './ListingMap.jsx';
import { Container, Row, Col} from "react-bootstrap";

class Listing extends React.Component {
  constructor(props) {
    super(props);
    let listing = dummyData.test.data;
    this.state = { listing: listing };
  }

  render() {
    return (
      <Container>
        <Row md={4}>
          <ListingImages />
        </Row>
        <Row md={8}>
          <Col md={8}>
            <ListingProductInformation listing={this.state.listing} />
          </Col>
          <Col md={4}>
            <Row>
              <ListingMap />
            </Row>
            <Row>
              <ListingContactInfo />
            </Row>
          </Col>
        </Row>
      </ Container>
    );
  }
}

export default Listing;


// <Container>
//   <ListingImages />
//   <ListingProductInformation listing={this.state.listing} />
//   <ListingContactInfo />
// </ Container>
