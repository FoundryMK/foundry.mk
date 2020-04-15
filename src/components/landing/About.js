import React from 'react';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const WGWrap = styled.div`
  display: flex;
  color: #000;
  background: #f2f2f2;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 50vh;
`;

const WGContent = styled.div`
  width: 70vw;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 800;
  font-size: 2rem;
  width: 100%;
  max-width: auto;

  &::after {
    width: 5vw;
    min-width: 74px;
    height: 1.3vh;
    background: #f7931e;;
    position: relative;
    margin-top: 1vh;
    display: block;
    content: ' ';
  }
`;

const TextBlock = styled.p`
  font-family: 'Montserrat';
  font-weight: 400;
  width: 50%;
  padding: 1%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ImageBlock = styled.img`
  width: 50%;
  padding: 1%;
  border: 1px solid #31263e;
  background: #ededed;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const LinkWrap = styled(AniLink)`
  box-shadow: none;
  text-decoration: none;
  color: #ee5622;
  display: block;
  text-align: right;
  padding: 2vh 2vw;
  font-family: Montserrat;
  font-size: 1.3rem;
  border: 1px solid #ee5622;
  transition: all .3s ease-out;
  margin-bottom: 4vh;

  &:hover {
    background: #ee5622;
    color: #fff;
    box-shadow: 0px 0px 12px #ee5622;
  }
`;

const Breaker = styled.hr`
  width: 100%;
  opacity: 0;
`;

export const About = () => {
  return (
    <React.Fragment>
      <WGWrap>
          <WGContent>
            <Title>About Foundry</Title>
            <TextBlock>
              Foundry was established in 2018 by a team of veterans as a dedicated software development company focused on solving our clients’ hardest technical challenges. From the drawing board, to an MVP or a prototype – we help them realize and test the viability of their business ideas on the market.
            </TextBlock>
            {/* <ImageBlock src="/droidworks170400137.jpg" /> */}
            {/* <ImageBlock src="/droidworks170400137.jpg" /> */}
            <TextBlock>
              In the age of global digitalization and broadband internet connections, geographical location quickly loses its significance in our industry. We believe that every engineer can craft their own perfect working environment and provide the best results. Foundry is a completely remote-capable company, delivering value globally.
            </TextBlock>
          </WGContent>
          <Breaker />
          <LinkWrap paintDrip hex="#f2f2f2" to="/about-us">Discover Foundry</LinkWrap>
      </WGWrap>
    </React.Fragment>
  );
};
