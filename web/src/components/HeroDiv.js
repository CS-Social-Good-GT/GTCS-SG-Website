import styled from 'styled-components'
import React from "react"

const Styles = styled.section`
    height: 100vh;
    background-color: white;
    h1 {
        padding-top: 40%;
    }
`;

const HeroDiv = () => (
  <Styles>
  <h1>
      We are GT + CS Social Good 
  </h1>
  </Styles>
)

export default HeroDiv 
