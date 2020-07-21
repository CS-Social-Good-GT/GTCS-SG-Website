import styled from 'styled-components'
import React from "react"

const Styles = styled.section`
    height: 20vh;
    background-color: skyblue;
    margin: auto;
`;

const Footer = () => (
 <Styles>
  <h1>
      Footer
  </h1>
    <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
 </Styles>
)

export default Footer 