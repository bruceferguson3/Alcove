import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Circle, Marker } from 'react-google-maps';

const WrappedMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    <Circle
      defaultCenter={{ lat: props.lat, lng: props.lng }}
      radius={300}
      options={{ strokeColor: "#194553" }}
    />
    <Marker defaultCenter={{ lat: props.lat, lng: props.lng }} />
  </GoogleMap>
))


// defaultCenter={{ lat: 30.267153, lng: -97.743057 }}


export default WrappedMap;
