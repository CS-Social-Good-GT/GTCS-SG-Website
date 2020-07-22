


//       import styled from 'styled-components'
// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import logo from "../images/fun.jpg"
// import TeamCard from './TeamCard'


// const Styles = styled.div`
//   .outer {
//     padding-top: 8%;
//     padding-bottom: 8%;
//     -webkit-tap-highlight-color: transparent;
//     color: white;
//     background: linear-gradient(0deg, rgba(72,72,74,0.7), rgba(72,72,74,0.7)), url(${logo});
//     background-attachment: fixed;
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center center;
//     height: auto;
//     width: 100%; 
//     text-align: center;
//   }
//   .container {
//     padding-left: 10%;
//     padding-right: 10%;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     width: auto;
//     margin-top: 4vh;
//     margin-bottom: 4vh;
//   }
//   h2 {
//     font-weight: 300;
//     padding-left: 10%;
//     padding-right: 10%;
//   }
//   p {
//     padding-left: 20%;
//     padding-right: 20%;
//   }
// `;


// const MemberDiv = () => {
//     const data = useStaticQuery(graphql`
//     query MyQuery {
//         allSanityTeam {
//           edges {
//             node {
//               description
//               name
//               members {
//                 name
//                 role
//                 yearJoined
//                 image {
//                   asset {
//                     fluid {
//                       src
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
      
//       `)
// console.log(data)



// const teamCard = data.allSanityTeam.edges.map(item => 
//     <TeamCard />
//     //name={item.node.name} image={item.node.header}
// );

// return (
//   <Styles>
//     <div class="outer">
//       <h2>Members</h2>
//       <p> Our </p>
//       <div className="container"> 
//         {teamCard}
//       </div> 
//    </div>
//   </Styles>
// )
 
// }

// export default MemberDiv 
