import styled from 'styled-components'
import React from "react"

const Styles = styled.section`
    color: black;
    .card {
        height: 300px;
        width: 300px;
        background-color: white;
        text-align: center;
        display: flex;
        padding: 10px;
        border: none;
        margin: 20px;
        -moz-box-shadow: 0 15px 40px rgba(250, 167, 68, 0.5);
        -webkit-box-shadow: 0 15px 40px rgba(249, 167, 68, 0.5);
        box-shadow: 0 15px 40px rgba(249, 167, 68, 0.5);
    }
    .card-img-top {
        height: 40px;
        width: 230px;
        transition: display 0.4s;
        z-index: 1;
        top: 10px;
        left: 10px;
        display: block;
    }
    .card-body {
        display: block;

    }
`;


const TeamCard = (props) => {
  const {name, image} = props
  const image_src = image.asset.fluid.src;

    return (
    <Styles>
        <div className="card">
            <img className="card-img-top" src={image_src} alt="Team Logo"></img>
            <div className="card-body">
                <h4>{name}</h4>
                <a className="learn-more">Learn more!</a>
            </div>
        </div>
    </Styles>
    )
 
}

export default TeamCard
