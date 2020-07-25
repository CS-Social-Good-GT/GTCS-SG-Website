import React from "react"
import styled from 'styled-components'
import MemberInfo from './MemberInfo'

const Styles = styled.section`
  .outer {
    background-color: #f8f9fa !important;
    // padding-top: 8%;
    // padding-bottom: 8%;
    display: none;
  }
  .name-desc-div {
    width: 100vw;
    text-align: center;
  }
  h2 {
    font-weight: 300;
    padding-top: 5%;
  }
  #description {
    color: rgb(134, 142, 150);
    line-height: 28.8px;
    padding-right: 20%;
    padding-left: 20%;
    padding-bottom: 30px;
  }
  .memberInfo {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 5%;
  }
  `

const MemberCard = (props) => {
  const {id, name, description, members} = props
  // const teamName = "Marketing"
  
    return (
      <Styles>
        <div id={id} className="outer">
          <div className="name-desc-div"> 
            <h2>{name}</h2>
            <p id='description'>{description}</p>
          </div> 
          <div className="memberInfo">
            {members.map(member => {
              return (
                  <MemberInfo image={member.image.asset.fluid.src} name={member.name} role={member.role} yearJoined={member.yearJoined} />
              )
            })}
          </div>
        </div>
      </Styles>
    )
}

export default MemberCard