import React from 'react';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const HeaderDiv = styled.div`
  width: 100vw;
  height: 8vh;
  z-index: 3;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6vh 3vw;
  transition: background-color .2s ease-out;
  flex-grow: 2;
  background: #31263e;

  @media (max-width: 420px) {
    justify-content: space-between;
  }

  &>a{
    margin: 0;
    padding: 0;
    line-height: 1em;
  }

  img {
    margin: 0;
    justify-self: flex-start;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
    color: #fff;
    transition: all .3s ease-out;

    @media (max-width: 420px) {
      position: absolute;
      top: -9999px;
      left: 0;
      opacity: 0;
      z-index: 9;
      width: 100vw;
      height: 100vh;
      background: rgba(68, 53, 91, .98);
      flex-direction: column;
      justify-content: center;
    }
  }

  a.hamburger {
    display: none;
    color: #fff;

    @media (max-width: 420px) {
      display: block;
      font-size: 3em;
      color: #fff;
    }
  }
  
  ul li {
    padding: 0 1.1em;

    @media (max-width: 420px) {
    }
  }

  a.closeMenu {
    position: absolute;
    transition: all .3s ease-out;
    opacity: 0;
    top: -9999px;
    color: #fff;

    @media (max-width: 420px) {
      top: 0;
      right: 3vw;
      z-index: 9;
      font-size: 3em;
      top: 2vh;
    }
  }
  
  ul li a {
    text-decoration: none;
    box-shadow: none;
    color: #fff;
    font-weight: 400;
    transition: all .3s ease-in-out;
    font-size: .9em;
    text-transform: uppercase;

    @media (max-width: 420px) {
      font-size: 1.2em;
      font-weight: 600;
      line-height: 4em;
    }
  }

  ul li a:hover {
    color: #f7931e;
    text-shadow: 0px 0px 12px #f7931e;
  }
`;

const showMenu = (e) => {
  e.preventDefault();

  const ul  = document.querySelector('.header ul');
  const closeMenu = document.querySelector('a.closeMenu');

  ul.style.opacity = 1;
  ul.style.top = 0;
  closeMenu.style.opacity = 1;
  closeMenu.style.top = '1vh';
}

const closeMenu = (e) => {
  e.preventDefault();

  const ul  = document.querySelector('.header ul');
  const closeMenu = document.querySelector('a.closeMenu');

  ul.style.opacity = 0;
  ul.style.top = '-9999px';
  closeMenu.style.opacity = 0;
  closeMenu.style.top = '-9999px';
}

export const Header = () => (
  <HeaderDiv className="header">
    <AniLink paintDrip hex="#31263e" to="/" style={{
      boxShadow: `none`,
      textDecoration: `none`,
      color: `inherit`,
    }}>
      <picture>
        <source media="(max-width: 840px)" srcSet="/foundry_logo_white.svg" />
        <source media="(min-width: 841px)" srcSet="/foundry_logo_full_white.svg" />
        <img src="/foundry_logo_full_white.svg" />
      </picture>
    </AniLink>
    <ul style={{
      fontFamily: `Inter, sans-serif`,
      color: '#fff',
    }}>
      <li><AniLink paintDrip hex="#31263e" to="/our-services">Our services</AniLink></li>
      <li><AniLink paintDrip hex="#31263e" to="/our-work">Our work</AniLink></li>
      <li><AniLink paintDrip hex="#31263e" to="/about-us">About us</AniLink></li>
      <li><AniLink paintDrip hex="#31263e" to="/contact">Contact</AniLink></li>
    </ul>
    <a 
      href="#"
      className="hamburger"
      style={{ color: '#fff', textDecoration: 'none', boxShadow: 'none' }}
      onClick={showMenu}
    >
        &#9776;
    </a>
    <a 
      href="#"
      className="closeMenu"
      style={{ color: '#fff', textDecoration: 'none', boxShadow: 'none' }}
      onClick={closeMenu}
    >
        &times;
    </a>
  </HeaderDiv>
);

export default Header;