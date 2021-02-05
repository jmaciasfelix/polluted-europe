import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  grid-gap: 32px;
  margin-top: 3rem;
  width: 100%;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 8px;
  border: 2px solid #111;
  margin: 1rem 0 3rem;
  padding: 64px 1.5rem 1.5rem;
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
    font-size: 2rem;
    line-height: 1.5;
  }
`;

export const Podium = () => {
  return (
    <Container>
      <Card>
        <section>
          <div>
            <h3>Spain</h3>
            <p>123123123</p>
          </div>
        </section>
      </Card>
      <Card>
        <section>
          <div>
            <h3>Spain</h3>
            <p>123123123</p>
          </div>
        </section>
      </Card>
      <Card>
        <section>
          <div>
            <h3>Spain</h3>
            <p>123123123</p>
          </div>
        </section>
      </Card>
    </Container>
  );
};
