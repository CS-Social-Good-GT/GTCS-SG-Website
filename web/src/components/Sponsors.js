import styled from 'styled-components'
import React from "react"
import sponsors from "../images/sponsors.jpg"


const Styles = styled.section`
    height: 50vh;
    margin: auto;
    background-image: url(${sponsors});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;

const Sponsors = () => (
    <section id='section-sponsors'>
 <Styles>  
  <h1>
      Sponsors
  </h1>
  </Styles> 
  </section>
)

export default Sponsors 