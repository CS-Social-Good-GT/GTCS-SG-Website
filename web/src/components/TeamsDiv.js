import styled from 'styled-components'
import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const Styles = styled.section`
    height: 80vh;
    background-color: white;
    margin: auto;
`;


const TeamsDiv = () => {
  const data = useStaticQuery(graphql`
  query MyTeamQuery {
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
return (
  <Styles>
  <h1>
      Our teams
  </h1>
  </Styles>
)
 
}

export default TeamsDiv 
