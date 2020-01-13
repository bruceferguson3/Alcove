import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Circle } from 'react-google-maps';

function Map() {
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 30.267153, lng: -97.743057 }}
    >
      <Circle
        defaultCenter={{ lat: 30.267153, lng: -97.743057 }}
        radius={300}
        options={{ strokeColor: "#194553" }}
      />
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));



export default WrappedMap;
