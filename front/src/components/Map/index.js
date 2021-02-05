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

const Pop = styled.small`
  margin: 0 2rem;
`;

export const Map = ({ pollutionIndex, coordinate }) => {
  return (
    <div>
      <ReactMap
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "45vh",
          width: "100%",
        }}
        center={coordinate}
      >
        <Popup
          coordinates={coordinate}
          closeButton={true}
          closeOnClick={false}
          anchor="top"
        >
          <Pop>{`🦠 Polution Index ${pollutionIndex}`}</Pop>
        </Popup>
      </ReactMap>
    </div>
  );
};
