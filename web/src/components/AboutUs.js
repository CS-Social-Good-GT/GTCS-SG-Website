import styled from 'styled-components'
import React from "react"


const Styles = styled.section`
    border: 1px solid black;
    -webkit-tap-highlight-color: transparent;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.8;
    color: #868e96;
    font-family: "Montserrat", Arial, sans-serif;
    box-sizing: inherit;
    position: relative;

    .container {
        margin-right: auto;
        margin-left: auto;
        padding-right: 10%;
        padding-left: 10%;
        padding-top: 7%;
        padding-bottom: 7%;
        max-width: 100vw;
    }

    .row {
        display: flex;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .col-lg-5 {
        flex: 1 1 800px;
        @media only screen and (min-width: 1000px) { 
            max-width: 41.66667%;
            -webkit-box-flex: 0;
            padding-right: 5%;
        }
    }

    .mt-0 {
        margin-top: 0px;
    }

    .heading-border-top {
        position: relative;
        padding-top: 30px;
    }

    .heading-border-top:before {
        position: absolute;
        top: 0;
        height: 2px;
        width: 50px;
        content: "";
        background: #00e6e6;
    }

    .font-weight-normal {
        font-weight: 400;
    }

    .col-lg-7 {
        flex: 1 1 1000px;
        @media only screen and (min-width: 1000px) { 
            max-width: 58.3333%;
            -webkit-box-flex: 0;
            padding-left: 5%;
        }
    }

    .img1 {
        text-align: center;
        position: relative;
        z-index: 2;
        -webkit-box-shadow: -17px 10px 34px -18px rgba(0, 0, 0, 0.5);
        box-shadow: -17px 10px 34px -18px rgba(0, 0, 0, 0.5);
    }

    .img-fluid {
        max-width: 100%;
        height: auto;
    }
`;

const AboutUs = () => (
  <Styles>
    <section id="section-about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 pr-md-5 pr-sm-0">
            <h2 className="mt-0 heading-border-top font-weight-normal" style={{color:'#2F2D2E'}}>About</h2>
            <p style={{color: '#2F2D2E'}}>Georgia Tech’s CS+Social Good is an organization that focuses on the intersection of STEM and social impact. Striving to build a community of passionate computer scientists and engineers who are applying their technical knowledge towards solving the world’s biggest problems, CS+Social Good is changing the way students understand the value behind a computer science education and its applications worldwide.
          </p>
          </div>
          <div className="col-lg-7">
              <img className="img1 img-fluid" src="https://d33wubrfki0l68.cloudfront.net/7c19c46d3da2482315d12971e4b346a13702bf15/4d9dc/assets/images/team.jpg" alt="Team Picture"></img>
          </div>
        </div>
      </div>  
    </section>
  </Styles>
)

export default AboutUs 
