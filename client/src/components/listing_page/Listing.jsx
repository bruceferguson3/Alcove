import React from "react";
import dummyData from "./dummyData.js";
import ListingProductInformation from "./ListingProductInfo.jsx";
<<<<<<< HEAD
import ListingImages from "./ListingImages.jsx";
=======
import ListingContactInfo from './ListingContactInfo.jsx';
import ListingImages from './ListingImages.jsx';
>>>>>>> be220bc7cd6eedd8be6d0c74249ae097537e24fd

class Listing extends React.Component {
  constructor(props) {
    super(props);
    let listing = dummyData.test.data;
    this.state = { listing: listing };
  }

  render() {
    return (
      <div>
        <ListingImages />
        <ListingProductInformation listing={this.state.listing} />
<<<<<<< HEAD
        <ListingImages images={this.state.listing.thumbs} />
=======
        <ListingContactInfo />
>>>>>>> be220bc7cd6eedd8be6d0c74249ae097537e24fd
      </div>
    );
  }
}

export default Listing;
