import React from "react";
import dummyData from "./dummyData.js";
import ListingProductInformation from "./ListingProductInfo.jsx";
import ListingImages from "./ListingImages.jsx";

class Listing extends React.Component {
  constructor(props) {
    super(props);
    let listing = dummyData.test.data;
    this.state = { listing: listing };
  }

  render() {
    return (
      <div>
        <ListingProductInformation listing={this.state.listing} />
        <ListingImages images={this.state.listing.thumbs} />
      </div>
    );
  }
}

export default Listing;
