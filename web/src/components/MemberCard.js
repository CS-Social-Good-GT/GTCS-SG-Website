import React from "react"
import styled from 'styled-components'

const Styles = styled.section`
  .outer {
    background-color: #F8F9FA

  }
  .name-desc-div {
    width: 100vw;
    text-align: center;
    

   }
   .member-card {
    -webkit-tap-highlight-color: transparent;
    font-weight: 300;
    line-height: 1.8;
    font-family: "Montserrat", Arial, sans-serif;
    box-sizing: inherit;
    //display: flex;
    -webkit-box-align: start;
    //align-items: flex-start;
    //margin-bottom: 3rem !important;
  }

  .member-name-div {
    -webkit-tap-highlight-color: transparent;
    box-sizing: inherit;
    //margin-bottom: 0.5rem;
    font-family: inherit;
    line-height: 1.1;
    font-weight: 300 !important;
    margin-top: 0 !important;
    font-size: 14px;
  }

  .member-info-div {
    -webkit-tap-highlight-color: transparent;
    line-height: 1.8;
    font-family: "Montserrat", Arial, sans-serif;
    box-sizing: inherit;
    //margin-top: 0;
    //margin-bottom: 1rem;
    font-weight: 300;
    font-size: 14px!important;
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
   .col-lg {
     
   }
   .all-member-div {
    
   }
   
   
   
   `


const MemberCard = (props) => {
  const {name, image, description, members} = props
  const teamName = "Marketing"
    
    return (
      <Styles>
        {/* <div className="outer"> */}
          <div className="name-desc-div"> 
          <h1>{name}</h1>
          <p>{description}</p>
          </div> 
          {members.map(member => {
            return (
              <div className='member-card'>
                <div className="col-lg">
            <div className="media pb_media_v1 mb-5">
              <div className="member-name-div">
                <img className="img-circle" src={member.image.asset.fluid.src} alt="Member" />
              </div>
              <div className="media-info-div">
                <h3 className="mt-0 pb_font-17">{member.name}</h3>
                <p className="pb_font-14">{member.role}<br />Major<br />Joined in {member.yearJoined}</p>
              </div>
            </div>
          </div>
              </div>
            )
          })}
      </Styles>
    )


}

export default MemberCard