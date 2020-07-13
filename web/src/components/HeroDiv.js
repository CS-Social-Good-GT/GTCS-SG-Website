import styled from 'styled-components'
import React from "react"
import logo from '../images/cssg-cropped.png'

const Styles = styled.section`
    background-image: url(${logo});
    background-size: cover;  
    background-repeat: no-repeat;
    
    h1 {
        padding-top: 40%;
    }
    h2 {
        font-size: 70px;
    }
    .myDiv {
        align-items: center;
        height: auto;
        text-align: center;
        justify-content: center;
        margin: auto;
        display: flex;
        font-size: 30px;
        height: 100vh;     
    }
`;

const HeroDiv = () => (
  <Styles>
      <div className='myDiv'>
          <div>
            <h2>GT  CS + Social Good</h2>
            <p> We empower students to leverage technology for social good by inspiring action, facilitating collaboration, and forging pathways towards change. </p>
            {/* <img src={logo}></img> */}
            </div>
            </div>
  </Styles>
)

export default HeroDiv 
