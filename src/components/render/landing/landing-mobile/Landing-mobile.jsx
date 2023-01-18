import React from 'react';
import "../landing-mobile/landingmobile.css";
import phone from "../../../../assets/img/img/prevent/phone-1.png";

const LandingMobile = () => {
    return (
        <div className="landingMobileContainer">
            <div classNAme="cuadrado">
                <div className="text">
                    <h1><b>Get the simple app for latest news</b></h1>
                    <h3>Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.</h3><br></br>
                    <buttom className="buttom">Download Now</buttom>
                </div>
                <img className="mobile" src={phone} alt="phone" />
            </div>
        </div>
    )};

export default LandingMobile;