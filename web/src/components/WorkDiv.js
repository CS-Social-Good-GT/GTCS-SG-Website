import styled from 'styled-components'
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Styles = styled.section`
    margin: auto;
    border: 1px solid black;
    -webkit-tap-highlight-color: transparent;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.8;
    color: #868e96;
    font-family: "Montserrat", Arial, sans-serif;
    color: black;
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

    .col-md-8 {
      width: 100%;
      text-align: center;
    }

    .heading-border-top {
      position: relative;
      padding-top: 30px;
    }

    .heading-border-top:before {
        position: absolute;
        top: 0;
        height: 2px;
        width: 70px;
        content: "";
        background: #00e6e6;
    }

    .font-weight-normal {
      font-weight: 400;
    }

    .col-lg-5 {
      flex: 1 1 800px;
      @media only screen and (min-width: 1000px) { 
          max-width: 41.66667%;
          -webkit-box-flex: 0;
          padding-left: 5%;
      }
    }

    .col-lg-7 {
      flex: 1 1 1000px;
      @media only screen and (min-width: 1000px) { 
          max-width: 58.3333%;
          -webkit-box-flex: 0;
          padding-right: 5%;
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

    a {
      color: #00e6e6;
      text-decoration: none;
      background-color: transparent;  
      transition: .3s all ease;
    }

    .tabs {
      width: 100%;
      overflow: hidden;
    }

    .tab {
      width: 100%;
      overflow: hidden;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      border-bottom: 1px solid #e9ecef;
      transition: .3s all ease;
    }

    .tab-label {
      padding-top: 1em;
      font-size: 18px;
      font-weight: 300;
      width: 1000px;
      color: #495057;
      padding-top: 0.8em;
      padding-bottom: 0.8em;
      @media only screen and (min-width: 1000px) { 
          width: 58.3333%;
      }
    }

    .tab-content {
      max-height: 0;
      padding: 0 1em;
      background: white;
      -webkit-transition: .3s all ease;
      transition: .3s all ease;
      color: #868e96;
    }

    input:checked + .tab-label {
      color: #00e6e6;
      transition: .3s all ease;
    }

    input:checked ~ .tab-content {
      max-height: 100%;
      padding: 0.5em;
      margin: 0px;
      padding: 10px;
      -webkit-transition: .3s all ease;
      transition: .3s all ease;
    }

    input {
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
    }
`;


const WorkDiv = () => {
  const data = useStaticQuery(graphql`
      query {
        allSanityProject {
          edges {
            node {
              title
              description
              _id
            }
          }
        }
      }
      `);

  const workDropdown = data.allSanityProject.edges.map(item => 
    <div className="tab">
      <input type="checkbox" id={String(item.node._id)}></input>
      <label className="tab-label" for={String(item.node._id)}>{item.node.title}</label>
      <div className="tab-content">
        {item.node.description}
      </div>
    </div>
  );

  console.log(data)

  return (
  <Styles>
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <h2 className="mt-0 heading-border-top font-weight-normal" style={{color:'#2F2D2E'}}>Work</h2>
        <p style={{color: '#868e96'}}>We have partnered with different companies, startups and organizations to host events on Georgia Tech's campus, focused on technology and social good. Some examples include Affirm, Kabbage, Black Girls Code & oSTEM. We also go off campus to bring CS education to local schools. 
      </p>
      </div>
    </div>  
    <div className="row">
          <div className="col-lg-7">
            <img className="img1 img-fluid" src="https://d33wubrfki0l68.cloudfront.net/8c105b4a9cc41e1429d57c30a4e8db0d4368acb4/fc96d/assets/images/educode.jpg" alt="Group of College Students Teaching Elementary Students Coding Principles"></img>
          </div>
          <div className="col-lg-5">
            <div className="tabs">
              { workDropdown }
            </div>
          </div>
      </div>
  </div>
  </Styles>
  )
}

export default WorkDiv 