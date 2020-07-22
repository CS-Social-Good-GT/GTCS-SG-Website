import styled from 'styled-components'
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../images/fun.jpg"
import MemberCard from './MemberCard'


const Styles = styled.div`
  background-color: #868e96;
`;


const MemberDiv = () => {
  const data = useStaticQuery(graphql`

  query MyQuery {
    allSanityTeam {
      edges {
        node {
          description
          name
          members {
            name
            role
            yearJoined
            image {
              asset {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }`)




const memberCard = data.allSanityTeam.edges.map(item => 
    <MemberCard name={item.node.name} image={item.node.header} description={item.node.description} members={item.node.members}/>
);

console.log(data)
return (
  <Styles>
    <div class="outer">
      <div className="container"> 
        {memberCard}
      </div> 
   </div>
  </Styles>
)
 
}

export default MemberDiv 