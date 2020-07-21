import styled from 'styled-components'
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../images/fun.jpg"
import TeamCard from './TeamCard'


const Styles = styled.div`
  .outer {
    padding-top: 8%;
    padding-bottom: 8%;
    -webkit-tap-highlight-color: transparent;
    color: white;
    background: linear-gradient(0deg, rgba(72,72,74,0.7), rgba(72,72,74,0.7)), url(${logo});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: auto;
    width: 100%; 
    text-align: center;
  }
  .container {
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
    margin-top: 4vh;
    margin-bottom: 4vh;
  }
  h2 {
    font-weight: 300;
    padding-left: 10%;
    padding-right: 10%;
  }
  p {
    padding-left: 20%;
    padding-right: 20%;
  }
`;


const TeamCardsDiv = () => {
  const data = useStaticQuery(graphql`

  query MyQueryTeams {
    allSanityTeam {
      edges {
        node {
          name
          header {
            asset {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }`)
console.log(data)



const teamCard = data.allSanityTeam.edges.map(item => 
    <TeamCard name={item.node.name} image={item.node.header}/>
);

return (
  <Styles>
    <div class="outer">
      <h2>Team</h2>
      <p> Our team is comprised of 6 teams- inspiration, education, engagement, marketing, finance, and bonding. All of these teams dedicate passion and copious time to create the excellent events we host on campus and locally.</p>
      <div className="container"> 
        {teamCard}
      </div> 
   </div>
  </Styles>
)
 
}

export default TeamCardsDiv 
