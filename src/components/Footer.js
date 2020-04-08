import React from 'react';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Logo from '../components/Logo';

const FooterDiv = styled.div`
  background: #221e22;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Montserrat';
  color: #fff;
  padding-top: 4vh;
  width: 100vw;

  ul {
    list-style: none;
    margin: 0;
    padding: 4vh 0 4vh 0;
    display: flex;
    flex-wrap: wrap;
    width: 70vw;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  li {
    width: 33%;
    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

const FContents = styled.div`
  width: 70%;
`;

const Dots = styled.div`
  height: 10vh;
  width: 100%;
  border-top: 1px solid #666;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  height: 22px;
  width: 22px;
  background: #666;
  margin-right: 4vw;
  border-radius: 9999px;
`;

const DWrap = styled.div`
  width: 70%;
  display: flex;
`;

const AniLinkWrap = styled(AniLink)`
  font-family: 'Inter';
  text-decoration: none;
  box-shadow: none;
  color: #f7931e;
  font-size: 1.2rem;
  transition: all .3s ease-out;

  &:hover {
    text-shadow: 0px 0px 12px #f7931e;
  }
`

export const Footer = () => {
  return (
    <FooterDiv>
      <FContents>
        <Logo />
        <p>
            {/* ToDo: Move this to data */}
            Kosta Shahov 7-5, 1000 Skopje <br/>
            ++389 78 397 359 <br/>
            Macedonia
        </p>
        <ul>
          <li><AniLinkWrap paintDrip hex="#221e22" to="/our-services">Our Services</AniLinkWrap></li>
          <li><AniLinkWrap paintDrip hex="#221e22" to="/our-work">Our Work</AniLinkWrap></li>
          <li><AniLinkWrap paintDrip hex="#221e22" to="/about-us">About us</AniLinkWrap></li>
          <li><AniLinkWrap paintDrip hex="#221e22" to="/contact">Contact</AniLinkWrap></li>
          <li><AniLinkWrap paintDrip hex="#221e22" to="/blog">Blog</AniLinkWrap></li>
        </ul>
      </FContents>
      <Dots>
        <DWrap>
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </DWrap>
      </Dots>
    </FooterDiv>
  );
};
