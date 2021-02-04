import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
//React-mapbox-gl
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
//constant
import { TOKEN_MAP } from "../../constant";

const ReactMap = ReactMapboxGl({
  accessToken: TOKEN_MAP,
});

export const Map = ({ longitude = -8.61099, latitude = 41.14961 }) => {
  const coordinates = [longitude, latitude];

  return (
    <ReactMap
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "80vh",
        width: "80vw",
      }}
      center={coordinates}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={coordinates} />
      </Layer>
    </ReactMap>
  );
};
