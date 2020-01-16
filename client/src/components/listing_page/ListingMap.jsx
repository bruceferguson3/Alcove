import React from "react";

import WrappedMap from "./WrappedMap.jsx";

const ListingMap = props => {
  // const API_KEY = process.env.REACT_APP_K || 555;
  // console.log(API_KEY);

  return (
    <div style={{ width: "60vw", height: "60vh" }}>
      <WrappedMap
        lat={30.267153}
        lng={-97.743057}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAeULYUDOtmp5tC2rAZdjsH4oeY77ZdGd4`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default ListingMap;

// defaultCenter={{ lat: 30.267153, lng: -97.743057 }}
