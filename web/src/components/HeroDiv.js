import styled from 'styled-components'
import React from "react"
import logo from '../images/logo.svg'

const Styles = styled.section`
    background: linear-gradient(0deg, rgba(72,72,74,0.7), rgba(72,72,74,0.7)), url(${logo});
    background-size: cover;  
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: white;
    padding-left: 15%;
    padding-right: 15%;
    
    h1 {
        padding-top: 40%;
    }
    h2 {
        font-weight: 350;
        font-size: 62px;
    }
    p {
        font-size: 20px;
    }
    .myDiv {
        align-items: center;
        height: auto;
        text-align: center;
        justify-content: center;
        margin: auto;
        display: flex;
        font-size: 30px;
        height: 93vh;   
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
