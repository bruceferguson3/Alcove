import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Circle } from 'react-google-maps';

const WrappedMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    <Circle
      defaultCenter={{ lat: props.lat, lng: props.lng }}
      radius={300}
      options={{ strokeColor: "#2fb5e9" }}
    />
  </GoogleMap>
))


// defaultCenter={{ lat: 30.267153, lng: -97.743057 }}


export default WrappedMap;
