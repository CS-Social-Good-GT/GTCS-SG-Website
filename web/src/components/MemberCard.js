import React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Styles = styled.section`
   .container {
     width: 100vw;
   }`


const MemberCard = () => {

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
    }
      `)
      const memberCard = data.allSanityTeam.edges.map(item => 
        <div><h1>{item.node.members.name}</h1>
        {/* <img src={item.node.members.image.asset.fluid.src}></img> */}
        </div>
        // <MemberCard name={item.node.members.name} image={item.node.members.image.src}/>
    );
    
    return (
      <Styles>
        <div class="outer">
          {/* <h2>Members</h2> */}
          <div className="container"> 
            {memberCard}
          </div> 
       </div>
      </Styles>
    )


}

export default MemberCard