import React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Styles = styled.section`
   .container {
     width: 100vw;

   }
   .member-card {
    // -webkit-tap-highlight-color: transparent;
    // font-size: 1rem;
    // font-weight: 300;
    // line-height: 1.8;
    // color: #868e96;
    // font-family: "Montserrat", Arial, sans-serif;
    // box-sizing: inherit;
    // position: relative;
    // width: 100%;
    // min-height: 1px;
    // padding-right: 15px;
    // padding-left: 15px;
    display: block;
   }
   .img-circle {
    // -webkit-tap-highlight-color: transparent;
    // font-family: "Montserrat", Arial, sans-serif;
    // font-size: 3.5rem;
    // font-weight: 300;
    // line-height: 1.1;
    // color: #00e6e6 !important;
    // box-sizing: inherit;
    // vertical-align: middle;
    // border-style: none;
    // max-width: 100%;
    // height: auto;
    border-radius: 50%;
    height: 78px;
    width: 78px;
   }
   
   
   
   `


const MemberCard = (props) => {
  const {name, image, description, members} = props
  
    
    return (
      <Styles>
        <div className="outer">
          <div className="container"> 
          <h1>{name}</h1> </div> 
          <p>{description}</p>
          {members.map(member => {
            return (
              <div className='member-card'>
                <div className="col-lg">
            <div className="media pb_media_v1 mb-5">
              <div className="icon border border-gray rounded-circle d-flex mr-3 display-4 text-primary">
                <img className="img-circle" src={member.image.asset.fluid.src} alt="Member" />
              </div>
              <div className="media-body">
                <h3 className="mt-0 pb_font-17">{member.name}</h3>
                <p className="pb_font-14">{member.role}<br />Major<br />{member.yearJoined}</p>
              </div>
            </div>
          </div>

                {/* <img src={member.image.asset.fluid.src}></img>
                <h2>{member.name}</h2>
                <p>{member.role}</p>
                <p>{member.yearJoined}</p> */}
              </div>
            )
          })}
       </div>
      </Styles>
    )


}

export default MemberCard