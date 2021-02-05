import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FooterContainer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  align-items: center;
  background: #fff;
  border-top: 1px solid #eaeaea;
  display: flex;
  font-size: 0.9rem;
  line-height: 1.5rem;
  margin-top: 4rem;
  padding: 2rem 0.5rem;
  justify-content: center;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  span {
    display: none;
  }

  div > * {
    margin: 0 4px;
  }

  img {
    background: #fff;
    border-radius: 50000px;
    height: 1.5rem;
    margin-left: 0.3rem;
    padding: 0px 4px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px dashed rgb(224, 242, 255);
    color: black;
    text-decoration: none;
  }

  a:hover {
    border-bottom: 1px dashed #09f;
  }

  @media (min-width: 700px) {
    div {
      flex-direction: row;
    }
    span {
      display: block;
    }
  }
`;

export const Footer = () => (
  <FooterContainer>
    <div>
      <a
        href="https://jmaciasfelix.github.io/"
        target="_blank"
        rel="noreferrer"
      >
        Desarrollado por Jesús Macías
      </a>
      <span>&bull;</span>
      <a
        href="https://github.com/jmaciasfelix"
        rel="nofollow noreferrer"
        target="_blank"
      >
        GitHub
      </a>
      <span>&bull;</span>
      <a
        href="https://www.linkedin.com/in/jmfelix/"
        rel="nofollow noreferrer"
        target="_blank"
      >
        Linkedin
      </a>
    </div>
  </FooterContainer>
);
