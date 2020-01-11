import React from "react";
import ListingProductBullets from "./ListingProductBullets.jsx";

const ListingProductInfo = props => {
  return (
    <div>
      <div className="listingProductInformationHeader">
        <div>
          <h4>{props.listing.title}</h4>
          <h6>{props.listing.zip}</h6>
        </div>
        <div>
          <h4>{props.listing.filters.price}</h4>
        </div>
      </div>
      <ListingProductBullets bullets={props.listing.filters} />
    </div>
  );
};

export default ListingProductInfo;
