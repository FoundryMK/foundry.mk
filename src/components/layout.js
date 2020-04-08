import React from "react";
import styled from "styled-components";

import { Header } from './Header';
import { Footer } from './Footer';

import '../utils/global.css';
import 'inter-ui';

const Wrapper = styled.div`
  margin: 0;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Main = styled.div`
  background: #f2f2f2;
  min-height: 50vh;
  font-family: Montserrat;
  display: flex;
  width: 70vw;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  img {
    padding: 1%;
    border: 1px solid #31263e;
    // width: 100%;
    background: #ededed;
    display: block;
    margin: 2em auto;
  }

  p {
    max-width: 75ch;
  }
`

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
