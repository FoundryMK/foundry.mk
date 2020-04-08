import React from "react"

import styled from "styled-components"

import '../utils/global.css';
import 'inter-ui';

import { Header } from './Header';

class Layout extends React.Component {
  componentDidMount() {
    const bgWrapper = document.querySelector('.lcontents');
    document.querySelector('.lwrap').style.height = `${bgWrapper.clientHeight + 120}px`;
  }

  render() {
    const { children } = this.props; 

    return (
      <div style={{ width: '100vw', overflow: 'hidden' }}>
        <Wrapper>
          <Header />
          <div className="lwrap">
            <div className="landing"></div>
          </div>
          <div
            style={{
              padding: 0,
              margin: 0,
              width: '100vw',
              justifySelf: `flex-start`,
              position: `relative`,
              zIndex: 2,
            }}
          >
            <main>{children}</main>
          </div>
        </Wrapper>
      </div>
    )
  }
}

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 100vw;

  & > h1 {
    max-width: 720px;
  }

  p {
    font-size: 1.2em;
    max-width: 720px;
  }

  main {
    width: 100vw;
    display: flex;
    flex-direction: column;    
    // padding-left: 3vw;     
    flex-grow: 2;     
  }
`;

export default Layout;
