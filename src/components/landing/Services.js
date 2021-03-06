import React from 'react';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import MarkdownContent from '../MarkdownContent';

import LandingData from '../../../content/landing.json';

import Logo from '../Logo';

const ServicesDiv = styled.div`
  background: #f2f2f2;
  border-top: 5px solid rgba(213,9,249, .2);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  flex-wrap: wrap;

  h1 {
    font-weight: 600;
    font-family: 'Inter';
    text-transform: 'uppercase';
    font-size: 1.8rem;
    margin: 0;

    @media (max-width: 834px) {
      margin: .5rem 0 1rem 0;
    }

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
  }
`;

const SWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70vw;
  padding: 7vh 0;
  position: relative;
  z-index: 2;
  flex-direction: column;

  @media (max-width: 834px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const MDContainer = styled.div`
  width: 70vw;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 834px) {
    flex-direction: column;
  }

  p {
    font-family: 'Montserrat';
    font-weight: 400;
    width: 50%;
    padding: 1%;

    @media (max-width: 834px) {
      width: 100%;
    }
  }

  img {
    width: 50%;
    padding: 1%;
    border: 1px solid #31263e;
    background: #ededed;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

const Breaker = styled.hr`
  width: 100%;
  opacity: 0;
`;

const LHalfCircle = styled.div`
  position: absolute;
  left: 0;
  z-index: 1;
  transform-origin: 0% 0%;
  transform: scale(16) translateX(-49%) translateY(5%);
  
  @media (max-width: 834px) {
    transform: scale(12) translateX(-50%) translateY(35%);
  }

  @media (max-width: 600px) {
    transform: scale(8) translateX(-50%) translateY(70%);
  }

  @media (max-width: 412px) {
    transform: scale(6) translateX(-50%) translateY(135%);
  }

  @media (max-width: 375px) {
    transform: scale(6) translateX(-50%) translateY(150%);
  }
`;

const Large = styled.span`
  font-size: 2rem;
  font-weight: 800;
`;

const LogoWrap = styled(Logo)`
  clip-path: inset(0 0 20% 0);
  width: 30px;
  height: 40px;
  filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .3));
  opacity: .3;
`

const H1 = styled.h1`
  text-transform: uppercase;
  padding-left: 3vw;
  padding-bottom: 3em;
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
  transition: all .3s ease-out;
  justify-self: flex-end;
  border: 1px solid #ee5622;
  margin-bottom: 4vh;

  &:hover {
    background: #ee5622;
    color: #fff;
    box-shadow: 0px 0px 12px #ee5622;
  }
`;

export const Services = () => {
  return (
    <ServicesDiv>
      <LHalfCircle>
        <LogoWrap />
      </LHalfCircle>
      <SWrap>
        <H1>
          our <br/> <Large>services</Large>
        </H1>
        <MarkdownContent
          Wrapper={MDContainer}
          content={LandingData.services_section}
        />
      </SWrap>
      <Breaker />
      <LinkWrap paintDrip hex="#f2f2f2" to="/our-services">More about our services</LinkWrap>
    </ServicesDiv>
  );
}