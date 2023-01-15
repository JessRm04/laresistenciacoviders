import React from 'react'
import "./landing_prevent.css"
import hexagon from "../../img/icons/hexagon.png"

const PreventLandingCard = ({image, title, paragraph}) => {
    return (
    <div className="card">
        <div className="iconA">
            <img className="hexagon" src={hexagon} alt="hexagon"></img>
            <img className="iconImage" src={image} alt="icon"></img>
        </div>
        <div className="text">
            <h4>{title}</h4>
            <h5>{paragraph}</h5>
        </div>
    </div>
    );
}


export default PreventLandingCard;