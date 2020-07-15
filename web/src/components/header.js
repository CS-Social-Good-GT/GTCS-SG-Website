import { Link } from "gatsby";
import styled from 'styled-components'
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/cssglogocropped.jpg"

const Styles = styled.section`
  -webkit-tap-highlight-color: transparent;
  font-size: 1em;
  box-sizing: inherit;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 1rem 1rem;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  flex-wrap: nowrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
  z-index: 100;
  width: 100%;
  font-family: "Montserrat", Arial, sans-serif;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  margin-top: 0px;
  transition: .3s all ease-out;
  background: #fff !important;
  box-shadow: 0px 1px 10px -2px rgba(0, 0, 0, 0.15);
  li {
    display: inline-block;
    padding: 5px;
}
  // .pb_navbar .nav-link {
  //   font-size: 15px;
  //   padding-left: 1rem !important;
  //   padding-right: 1rem !important;

  // .pb_navbar {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   z-index: 100;
  //   width: 100%;
  //   font-family: "Montserrat", Arial, sans-serif;
  //   box-shadow: 0 0 black;
  // }
// .collapse navbar-collapse {
//   line-height: 1.15;
//   -webkit-tap-highlight-color: transparent;
//   font-size: 1em;
//   -webkit-box-direction: normal;
//   font-family: "Montserrat", Arial, sans-serif;
//   box-sizing: inherit;
//   flex-basis: 100%;
//   -webkit-box-align: center;
//   align-items: center;
//   display: flex !important;
// }


  // li {
  //   line-height: 1.15;
  //   -webkit-tap-highlight-color: transparent;
  //   font-size: 1em;
  //   font-family: "Montserrat", Arial, sans-serif;
  //   list-style: none;
  //   -webkit-box-direction: normal;
  //   box-sizing: inherit;  
  // }
  .navbar-brand {
    color: #00e6e6;
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
}
}


  `
const Header = () => (
  <Styles>
  <div>
  <nav class="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light scrolled awake" id="pb-navbar">
      <div class="container">
        <a class="navbar-brand" href="/">GT CS + Social Good</a>
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#probootstrap-navbar" aria-controls="probootstrap-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span><i class="ion-navicon"></i></span>
        </button> */}
        <div class="collapse navbar-collapse" id="probootstrap-navbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="#section-home">Home</a></li>
            <li class="nav-item"><a class="nav-link active" href="#section-about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-team">Team</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-work">Work</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-sponsors">Sponsors</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</Styles>
  
)



export default Header
