import React from "react";
import styled from "styled-components";
//components
import { BackIcon } from "../../components/Icons/Back";
//wouter
import { Link } from "wouter";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  main {
    h1 {
      color: var(--text-title-color);
      margin: 0;
      line-height: 1.15;
      font-size: 3rem;
    }
    display: flex;
    align-items: center;
    padding-top: 64px;
    padding-bottom: 4rem;
    div {
      text-align: center;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
  figure {
    width: 50%;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
`;

export const NotFound = () => (
  <Container>
    <main>
      <Link href="/">
        <i>
          <BackIcon />
        </i>
      </Link>
      <div>
        <h1>404 Not Found ...</h1>
      </div>
    </main>

    <figure>
      <img
        src="https://media.giphy.com/media/l1KVcrdl7rJpFnY2s/giphy.gif"
        alt="404"
      />
    </figure>
  </Container>
);
