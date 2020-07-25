import styled from 'styled-components'
import React from "react"


const Styles = styled.div`
  display: inline-block;
  .img-circle {
    border-radius: 50%;
    height: 78px;
    width: 78px;
    vertical-align: middle;
    margin-bottom: 0px;
    align-self: center;
   }
   .member-card {
    height: auto;
    width: 300px;
    display: inline-block;
    font-weight: 300;
    padding: 10px;
    align-items: center;
  }

  .member-name-div {
    -webkit-tap-highlight-color: transparent;
    box-sizing: inherit;
    font-family: inherit;
    line-height: 1.1;
    font-weight: 300 !important;
    margin-top: 0 !important;
    font-size: 14px;
    margin-right: 20px;
    display: flex;
    padding: 0px !important;
  }

  .member-info-div {
    -webkit-tap-highlight-color: transparent;
    box-sizing: inherit;
    font-weight: 300;
    font-size: 14px!important;
  }

  .media-info-div {
    line-height: 20px !important;
  }

  .media {
      display: flex;
      flex-direction: row;
  }
  .pb_font-17 {
      font-size: 17px;
  }
  .pb_font-14 {
      margin-top: 8px;
      font-size: 14px;
      margin-bottom: 0px;
  }
  h3 {
      margin: 0px;
  }

`;


const MemberInfo = (props) => {
const {image, name, role, yearJoined} = props;

return (
  <Styles>
    <div className='member-card'>
        <div className="media">
            <div className="member-name-div">
                <img className="img-circle" src={image} alt="Member"></img>
            </div>
            <div className="media-info-div">
                <h3 className="mt-0 pb_font-17">{name}</h3>
                <p className="pb_font-14">{role}<br />Major<br />Joined in {yearJoined}</p>
            </div>
        </div>
    </div>
  </Styles>
)
 
}

export default MemberInfo 