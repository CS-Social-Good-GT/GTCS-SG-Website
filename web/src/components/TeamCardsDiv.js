import styled from 'styled-components'
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../images/fun.jpg"



const Styles = styled.section`

  .col-lg-7 {
    color: white;

  }
    -webkit-tap-highlight-color: transparent;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.8;
    color: #868e96;
    font-family: "Montserrat", Arial, sans-serif;
    box-sizing: inherit;
    padding: 9em 0;
    position: relative;
    display: block;
    background-image: url(${logo});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 80vh;
    background-color: white;
    margin: auto;
    text-align: center;
    display: flex;
    height: auto;
    width: auto;
    justify-content: space-between;

      .card {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: 0.25rem;
        height: 10%;
        width: 10%;
    
    }
    
`;


const TeamCardsDiv = () => {
  const data = useStaticQuery(graphql`
  query MyTeamQuery {
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
    <div class="container">
        <div class="row justify-content-md-center text-center mb-5">
        </div>
        <div class="row align-items-center">
          <div class="col-md">
            <div class="card text-center pb_card_v1 mb-4">
              
              {/* <img class="card-img-top rounded-circle w-50 mx-auto" src={item.node.header.asset.fluid.src} alt="Team Logo"/> */}
              <div class="card-body">
  <h4 class="card">{item.node.name}</h4>
  <a class="learn-more">Learn more!</a>
                {/* <p><a class="learn-more" id="inspiration" style="color: rgb(0, 230, 230);" onmouseover="this.style.color='#008080'" onmouseout="this.style.color='#00e6e6'">Learn more!</a></p> */}
              </div>
            </div>
          </div>
          
          
        </div>
      </div>


    // <div className="tab-content">
    //   {item.node.name}
    //   <img src={logo}></img>
      
    // </div>
);


return (
  <Styles>

    <div>
    <div class="col-lg-7">
            <h2 class="mt-0 heading-border-top light font-weight-normal text-white">Team</h2>
          
  <p>
  Our team is comprised of 6 teams- inspiration, education, engagement, marketing, finance, and bonding. All of these teams dedicate passion and copious time to create the excellent events we host on campus and locally.
  </p>
  </div>
  {teamCard}
  </div>
  </Styles>
)
 
}

export default TeamCardsDiv 
