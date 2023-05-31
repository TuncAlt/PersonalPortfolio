import Link from "next/link";
import React from "react";
import styled from "styled-components";
export default function Home() {
  return (
    <>
      <Main>
        <>
          <Title>
            <Link href="/">Tuncer Altun</Link>
          </Title>
        </>
      </Main>
    </>
  );
}

const Main = styled.main`
  background-color: #000;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  font-family: "Roboto";
  color: #fff;

  &:hover {
    background: linear-gradient(#3db7ff, #ff00e9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
