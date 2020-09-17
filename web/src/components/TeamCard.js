import styled from 'styled-components'
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
        padding-top: 10%;
        height: 50%;
        max-width: 50%;
        // max-height: 100%;
        transition: display 0.4s;
        top: 10px;
        left: 10px;
        object-fit: contain;
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
    }

    button {
        background-color: transparent !important;
        border: none !important;
        color: #00e6e6 !important;
    }
`;


const TeamCard = (props) => {
  const {name, image, allNames} = props
  const image_src = image.asset.fluid.src;
  function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
  }
  const handleDivOpen = () => {
    let target = document.getElementById(name)
    if (target.style.display !== 'block') {
        let clearAll = (value) => {
            document.getElementById(value).style.display = 'none';
        }
        allNames.forEach(clearAll)
        target.style.display = 'block';
        window.scrollTo({top:findPos(target), behavior:'smooth'});
    } else {
        target.style.display = 'none';
    } 
  }   

return (
<Styles>
    <div className="card">
        <img className="card-img-top" alt="Team Logo" src={image_src}></img>
        <div className="card-body">
            <h4>{name}</h4>
            <button className="learn-more" onClick={handleDivOpen}> Learn more! </button>
            {/* <a className="learn-more">Learn more!</a> */}
        </div>
    </div>
</Styles>
)
 
}

export default TeamCard
