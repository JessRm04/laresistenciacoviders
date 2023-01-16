import React from 'react'
import "../atomos/landing_prevent.css"
import PreventLandingCard from '../atomos/Landing-prevent-card';
import ambulance from "../../img/icons/ambulance.png"


const PreventLanding = () => {

    
    return (
    <div className="pageContainer">
        <div className="header">
            <h3>Prevent</h3>
            <h1>Best way to prevent is avoid virus.</h1>
        </div>
        <div>
        <PreventLandingCard image={ambulance} title="Personal contact" paragraph="Fever is a key sympton"/>
        </div>
    </div>
    );
}


export default PreventLanding;