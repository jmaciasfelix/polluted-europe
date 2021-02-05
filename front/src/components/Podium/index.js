import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  grid-gap: 32px;
  margin: 6rem 0;
  width: 100%;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Card = styled.div`
  background: #ffffff;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid #111;
  margin: 1rem 0 3rem;
  padding: 2.4rem 1.5rem;
  position: relative;
  text-align: center;
  box-shadow: rgb(210, 239, 253) 14px 14px;
  section {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
  h3 {
    color: #2c7cdc;
    font-size: 1.5rem;
    margin: 0;
  }
  p {
    font-weight: bold;
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export const Podium = ({ selectCity, podiumCities }) => {
  return (
    <Container>
      {podiumCities.map(({ pollutionIndex, coordinate, city }) => (
        <Card
          key={city}
          onClick={() => selectCity(city, pollutionIndex, coordinate)}
        >
          <section>
            <div>
              <h3>{city}</h3>
              <p>Index Polluted: {pollutionIndex}</p>
            </div>
          </section>
        </Card>
      ))}
    </Container>
  );
};

Podium.propTypes = {
  selectCity: PropTypes.func.isRequired,
  podiumCities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      pollutionIndex: PropTypes.number.isRequired,
      coordinate: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      rank: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
