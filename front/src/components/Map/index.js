import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
//React-mapbox-gl
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
//constant
import { TOKEN_MAP } from "../../constant";

const ReactMap = ReactMapboxGl({
  accessToken: TOKEN_MAP,
});

export const Map = ({ pollutionIndex, coordinate }) => {
  return (
    <ReactMap
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "80vh",
        width: "80vw",
      }}
      center={coordinate}
    >
      <Popup
        coordinates={coordinate}
        closeButton={true}
        closeOnClick={false}
        anchor="top"
      >
        <div>
          <p>{`🦠 Polution Index ${pollutionIndex}`}</p>
        </div>
      </Popup>
    </ReactMap>
  );
};
