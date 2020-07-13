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

  // const teamCard = data.allSanityTeam.edges.map(item => 
  //   <div className="tab">
  //   <input type="checkbox" id={String(item.node._id)}></input>
  //   <label className="tab-label" for={String(item.node._id)}>{item.node.title}</label>
  //   <div className="tab-content">
  //     {item.node.description}
  //   </div>
//   // </div>
// );


return (
  <Styles>
    <h1>Team</h1>
  <p>
  Our team is comprised of 3 teams- inspiration, education, and entrepreneurship. All of these teams dedicate passion and copious time to create the excellent events we host on campus and locally.  </p>
  </Styles>
)
 
}

export default TeamsDiv 
