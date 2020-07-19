import { Link } from "gatsby";
import styled from 'styled-components'
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/cssglogocropped.jpg"

const Styles = styled.section`
  .header {
    -webkit-tap-highlight-color: transparent;
    box-sizing: inherit;
    z-index: 100;
    width: 100%;
    font-family: "Montserrat", Arial, sans-serif;
    position: fixed;
    top: 0;
    transition: .3s all ease-out;
    box-shadow: 0px 1px 10px -2px rgba(0, 0, 0, 0.15);
    padding-top: 20px;
    padding-left: 50px;
    padding-right: 50px;
    height: 70px;
    background: white;
  }
  
  a {
    text-decoration: none;
  }

  .nav-link, .nav-link:visited {
    color: #2F2D2E;
  }

  .nav-link:hover {
    color: #00e6e6;
  }

  li {
    line-height: 1.15;
    -webkit-tap-highlight-color: transparent;
    font-size: 1em;
    font-family: "Montserrat", Arial, sans-serif;
    list-style: none;
    -webkit-box-direction: normal;
    box-sizing: inherit;  
    display: inline-block;
    padding: 5px;
    font-size: 0.9rem;
  }

  .navbar-brand, {
    color: #00e6e6;
    display: inline-block;
    font-size: 80px;
    line-height: inherit;
    white-space: nowrap;
  }

  .navbar-brand:visited {
    color: #00e6e6;
  }
  
  .navbar-brand:active {
    color: #00e6e6;
  }

  .links {
    float: right;
    @media screen and (max-width: 700px) {
      display: none;
    }
  }


  `
const Header = () => (
  <Styles>
  <header className="header">
        <a className='navbar-brand' href="">GT CS + Social Good</a>
        <div className="links">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="#section-home">Home</a></li>
            <li className="nav-item"><a id='about-link' className="nav-link" href="#section-about">About</a></li>
            <li className="nav-item"><a id='team-link' className="nav-link" href="#section-team">Team</a></li>
            <li className="nav-item"><a id='work-link' className="nav-link" href="#section-work">Work</a></li>
            <li className="nav-item"><a id='sponsors-link' className="nav-link" href="#section-sponsors">Sponsors</a></li>
            <li className="nav-item"><a id='contact-link' className="nav-link" href="#section-contact">Contact</a></li>
          </ul>
        </div>
  </header>
</Styles>
  
)



export default Header
