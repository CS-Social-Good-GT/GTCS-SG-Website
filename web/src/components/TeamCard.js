import styled from 'styled-components'
import Image from "../components/image"
import React from "react"

const Styles = styled.section`
    color: black;
    .card {
        height: 300px;
        width: 300px;
        background-color: white;
        text-align: center;
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, 0.125);
        margin: 20px;
        position: relative;
        border-radius: 0.25rem;

        
    }
    .card-img-top {
        height: 60%;
        width: 70%;
        transition: display 0.4s;
        top: 10px;
        left: 10px;
        object-fit: cover;
        text-align: center;
    }
    .card-body {
        flex: 1 1 auto;
        display: block;
        font-weight: 300;
        text-align: center;
        right: auto;
        left: auto;
    }
    h4 {
        font-weight: 300;
    }
    a {
       color: #00e6e6;
    }

    a:hover {
        color: #008080;
    
`;


const TeamCard = (props) => {
  const {name, image} = props
  const image_src = image.asset.fluid.src;

    return (
    <Styles>
        <div className="card">
            <img className="card-img-top" alt="Team Logo" src={image_src}></img>
            <div className="card-body">
                <h4>{name}</h4>
                <a className="learn-more">Learn more!</a>
            </div>
        </div>
    </Styles>
    )
 
}

export default TeamCard
