import { Link } from "gatsby";
import styled from 'styled-components'
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/cssglogocropped.jpg"

const Styles = styled.section`
  .white {
    background-color: white;
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
    padding-left: 10%;
    padding-right: 10%;
    height: 70px;
  }

  .clear {
    -webkit-tap-highlight-color: transparent;
    box-sizing: inherit;
    z-index: 100;
    width: 100%;
    font-family: "Montserrat", Arial, sans-serif;
    position: fixed;
    top: 0;
    transition: .3s all ease-out;
    // box-shadow: 0px 1px 10px -2px rgba(0, 0, 0, 0.15);
    padding-top: 20px;
    padding-left: 10%;
    padding-right: 10%;
    height: 70px;
    background: transparent; //changed from white
  }
  
  a {
    text-decoration: none;
  }

  .nav-link, .nav-link:visited {
    color: #FFFF; //changed from blue
  }

  .nav-link:hover {
    color: #00e6e6;
  }

  .active {
    color: #00e6e6;
  }

  li {
    line-height: 1.15;
    -webkit-tap-highlight-color: transparent;
    font-size: 15px;
    font-family: "Montserrat", Arial, sans-serif;
    list-style: none;
    -webkit-box-direction: normal;
    box-sizing: inherit;  
    display: inline-block;
    padding-left: 36px;
  }

  .navbar-brand, {
    color: white;
    display: inline-block;
    line-height: inherit;
    white-space: nowrap;
    font-size: 30px;
  }

  .navbar-brand:visited {
    color: #00e6e6;
  }
  
  .navbar-brand:active {
    color: #00e6e6;
  }

  .black {
    color: black;
  }

  .black:hover {
    color: #00e6e6;
  }

  .links {
    float: right;
    @media screen and (max-width: 700px) {
      display: none;
    }
  }


  `
const Header = () => {
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    // console.log(currentScrollPos);
    console.log('woooooo scroll');
    if (currentScrollPos > 550) {
      var header = document.getElementById("header");
      header.classList.add("white");
      header.classList.remove("clear");
      var nav_links= document.getElementsByClassName("nav-link");
      var i;
      for (i = 0; i < nav_links.length; i++) {
        nav_links[i].classList.add("black")
      }
    } else {
      var header = document.getElementById("header");
      header.classList.remove("white");
      header.classList.add("clear");
      var nav_links= document.getElementsByClassName("nav-link");
      var i;
      for (i = 0; i < nav_links.length; i++) {
        nav_links[i].classList.remove("black")
      }
    } 

    if (currentScrollPos < 550) {
      document.getElementById('about-link').style.color = 'white';
      document.getElementById('team-link').style.color = 'white';
      document.getElementById('work-link').style.color = 'white';
      document.getElementById('sponsors-link').style.color = 'white';
      document.getElementById('contact-link').style.color = 'white';
    } else if (currentScrollPos >= 550 && currentScrollPos < 1200) {
      document.getElementById('about-link').style.color = '#00e6e6';
      document.getElementById('team-link').style.color = 'black';
      document.getElementById('work-link').style.color = 'black';
      document.getElementById('sponsors-link').style.color = 'black';
      document.getElementById('contact-link').style.color = 'black';
    } else if (currentScrollPos >= 1200 && currentScrollPos < 2350) {
      document.getElementById('about-link').style.color = 'black';
      document.getElementById('team-link').style.color = '#00e6e6';
      document.getElementById('work-link').style.color = 'black';
      document.getElementById('sponsors-link').style.color = 'black';
      document.getElementById('contact-link').style.color = 'black';
    } else if (currentScrollPos >= 2350 && currentScrollPos < 3200) {
      document.getElementById('about-link').style.color = 'black';
      document.getElementById('team-link').style.color = 'black';
      document.getElementById('work-link').style.color = '#00e6e6';
      document.getElementById('sponsors-link').style.color = 'black';
      document.getElementById('contact-link').style.color = 'black';
    } else if (currentScrollPos >= 3200 && currentScrollPos < 3780) {
      document.getElementById('about-link').style.color = 'black';
      document.getElementById('team-link').style.color = 'black';
      document.getElementById('work-link').style.color = 'black';
      document.getElementById('sponsors-link').style.color = '#00e6e6';
      document.getElementById('contact-link').style.color = 'black';
    } else if (currentScrollPos >= 3780) {
      document.getElementById('about-link').style.color = 'black';
      document.getElementById('team-link').style.color = 'black';
      document.getElementById('work-link').style.color = 'black';
      document.getElementById('sponsors-link').style.color = 'black';
      document.getElementById('contact-link').style.color = '#00e6e6';
    }
  }
  return (
    <Styles>
    <header id='header' className="clear">
          <a className='navbar-brand' href="">GT CS + Social Good</a>
          <div className="links">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a id='home-link' className="nav-link" href="#section-home">Home</a></li>
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
}



export default Header
