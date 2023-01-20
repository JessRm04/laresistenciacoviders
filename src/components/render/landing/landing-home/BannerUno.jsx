import React from "react";
import flag_spain from "../../../../assets/images/flag_spain.png";
import girl from "../../../../assets/images/girl.png";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../landing-home/Banner_uno.css";
//import NavbarLanding from "../landing-navbar/NavbarLanding";
import Symptom from "../landing-symptom/Symptom";
import PreventLanding from "../../../moleculas/Mol-Landing-prevent";
import Spreads from "../landing-spreads/Spreads";
import Question from "../landing-view-questions/landing-view-question";
import Washed from "../landing-view-wash/landing-view-wash";
import LandingMobile from "../landing-mobile/Landing-mobile";
import News from "../landing-news/News";
import Footer from "../footer/Footer";


export default function BannerUno() {
  return (
    <div className="fondo">
      <div className="flag">
        <p className="textRed">9779130</p>
        <TrendingDownOutlinedIcon className="arrowDos"/>
        <hr className="line" />
        <img className="flagSpain" src={flag_spain} alt="bandera españa" />
        <div className="orange">
          <p className="textOrag">92966</p>
        </div>
        <div className="green">
          <p className="textGreen">5839859</p>
        </div>
      </div>
      <img className="girl" src={girl} alt="chica tosiendo" />
      <div className="content">
        <h1 className="title">
          Stay Home, And Prayer For Victim Of Corona virus.
        </h1>
        <p className="text">
          Human Coronaviruses are common and are typically associated with mild
          illnesses, similar to the common cold. The corona virus COVID-19 is
          affecting 210 countries & territories around the world and 2
          international conveyances.{" "}
        </p>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faShare} size="2xl" border className="arrow" />
        <FontAwesomeIcon
          icon={faHeadset}
          size="2xl"
          border
          flip="horizontal"
          className="headset"
        />
        <FontAwesomeIcon
          icon={faCartShopping}
          size="2xl"
          border
          flip="horizontal"
          className="cartShopping"
        />
      </div>
      <div className="hlc" title="qurantine"><Symptom /></div>
      <div className="hlc" title="prevention"><PreventLanding /></div>
      <div className="hlc" title="social-distance"><Spreads /></div>
      <div className="hlc" title="about"><Question /></div>
      <div className="hlc" title="hand-wash"><Washed /></div>
      <div className="hlc" title="blog-details"><LandingMobile /></div>
      <div className="hlc" title="blog"><News /></div>
      <div className="hlc" title="help"><Footer /></div>
    </div>
  );
}
