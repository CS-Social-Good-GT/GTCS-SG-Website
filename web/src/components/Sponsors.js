import styled from 'styled-components'
import React from "react"
import sponsors from "../images/sponsors.jpg"
import { useStaticQuery, graphql } from "gatsby"

const Styles = styled.section`
    margin: auto;
    background: linear-gradient(0deg, rgba(72,72,74,0.7), rgba(72,72,74,0.7)), url(${sponsors});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    text-align: center;
    color: white;
    .row {
        padding-left: 10%;
        padding-right: 10%;
    }
    h2 {
        padding-top: 10%;
        font-weight: 300;
        font-size: 37px;
    }
    .img-fluid {
        display: inline-block;
        max-width: 300px;
        max-height: 100px;
        padding-left: 40px;
        padding-right: 40px;
        vertical-align: middle;
    }
    .sub-heading {
        padding-left: 25%;
        padding-right: 25%;
    }
    .btn {
        display: inline-block;
        font-weight: 280;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        padding: 15px 20px;
        font-size: 13px;
        line-height: 1.25;
        -webkit-transition: all 0.15s ease-in-out;
        -o-transition: all 0.15s ease-in-out;
        transition: all 0.15s ease-in-out;
        margin-bottom: 10%;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .btn:hover {
        color: black;
        background-color: white;
    }
    a {
        color: white;
        text-decoration: none;
    }
`;

const Sponsors = () => {
    const data = useStaticQuery(graphql`
    query MyQuerySponsors {
        allSanitySponsor {
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
    return (
     <section id='section-sponsors'>
     <Styles>  
        <div className="row">
            <h2 className="heading mb-3">Sponsors</h2> 
            <div className="row align-items-center justify-content-md-center">
                {data.allSanitySponsor.edges.map(item => 
                    <img src={item.node.header.asset.fluid.src} alt={item.node.name} className='img-fluid'></img>)}
            </div> <br></br>
            <p className="sub-heading">Contact us to learn more about how you can support our mission and become an official sponsor.</p>
            <a href="#section-contact" role="button" className="btn smoothscroll">SPONSOR US</a>
        </div>
      </Styles> 
      </section>
    )
}

export default Sponsors 