import styled from 'styled-components'
import React from "react"

const Styles = styled.section`
    height: 80vh;
    background-color: white;
    margin: auto;
`;
const data = useStaticQuery(graphql`
query MyQuery {
  allSanityTeam {
    edges {
      node {
        name
        header {
          asset {
            url
          }
        }
      }
    }
  }
}`)

const TeamsDiv = () => (
  <Styles>
  <h1>
      Our teams
  </h1>
  </Styles>
)

export default TeamsDiv 
