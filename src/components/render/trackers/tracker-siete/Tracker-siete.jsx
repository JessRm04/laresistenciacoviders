import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./tracker-siete.css";
import geo from "../../../../assets/images/geo.png";
import covidblue from "../../../../assets/img/covidblue.svg";
import covidred from "../../../../assets/img/covidred.svg";
import covidorange from "../../../../assets/img/covidorange.svg";
import covidgreen from "../../../../assets/img/covidgreen.svg";
import Layout from "../tracker-layout/Layout";
import TrackerDiecinueve from "../tracker-covid19/Tracker-covid-diecinueve";
import DataApiUsa from "../../../../services/Servives-data-api-usa";
import flagUsa from "../../../../assets/img/img/icons/usa.png"

const TrackerSiete = () => {
  const responseData = DataApiUsa();
  return (
    <div className="container-tracker-siete">
      <div className="">
        <Layout />
        <TrackerDiecinueve />
      </div >
      <div className="container-mapa-mundi">
        <h4>World</h4>
        <div className="fondo-mapa">
          <img src={geo} className='mapamundi' alt='imagen mapa-mundi'/>
        </div>
      </div>
      {responseData && (
        <div className="tracker-7">
          <img src={flagUsa} alt="usa" className="flag-usa"/>
          <span className="usa">USA</span>
          <div className="container-colum">
            <div className="div1">
              <div className="casos">
                <h5>Total Cases</h5>
                <div className="linea">
                  <hr width="100%" />
                </div>
                <h2>{responseData.cases}</h2>
              </div>
              <div className="virus-v">
                <img
                  className="virus"
                  src={covidblue}
                  alt="virus"
                  width="100px"
                />
              </div>
            </div>

            <div className="div2">
              <div className="casos">
                <h5>Today Cases</h5>
                <hr />
                <h2>{responseData.todayCases}</h2>
              </div>
              <div className="virus-v">
                <img
                  className="virus"
                  src={covidorange}
                  alt="virus"
                  width="100px"
                />
              </div>
            </div>
            <div className="div3">
              <div className="casos">
                <h5>Total Deaths</h5>
                <hr />
                <h2>{responseData.deaths}</h2>
              </div>
              <div className="virus-v">
                <img
                  className="virus"
                  src={covidgreen}
                  alt="virus"
                  width="100px"
                />
              </div>
            </div>

            <div className="div4">
              <div className="casos">
                <h5>Today Deaths</h5>
                <hr />
                <h2>{responseData.todayDeaths}</h2>
              </div>
              <div className="virus-v">
                <img
                  className="virus"
                  src={covidred}
                  alt="virus"
                  width="100px"
                />
              </div>
            </div>

            <div className="div5">
              <div className="casos">
                <h5>Recovered</h5>
                <hr />
                <h2>{responseData.recovered}</h2>
              </div>
              <div className="virus-v">
                <img
                  className="virus"
                  src={covidgreen}
                  alt="virus"
                  width="100px"
                />
              </div>
            </div>

            <div className="div6">
              <div className="casos">
                <h5>Active</h5>
                <hr />
                <h2>{responseData.active}</h2>
              </div>
              <div className="virus-v">
                <img
                  className="virus"
                  src={covidblue}
                  alt="virus"
                  width="100px"
                />
              </div>
            </div>

            <div className="div6">
              <div className="casos">
                <h5>Critical</h5>
                <hr />
                <h2>{responseData.critical}</h2>
              </div>
              <div className="virus-v">
                <img
                  className="virus"
                  src={covidorange}
                  alt="virus"
                  width="100px"
                />
              </div>
            </div>

            <div className="div4">
              <div className="casos">
                <h5>Cases Per Million</h5>
                <hr />
                <h2>{responseData.casesPerOneMillion}</h2>
              </div>
              <div className="virus-v">
                <img
                  className="virus"
                  src={covidblue}
                  alt="virus"
                  width="100px"
                />
              </div>
            </div>

            <div className="div5">
              <div className="casos">
                <h5>Deaths Per Million</h5>
                <hr />
                <h2>{responseData.deathsPerOneMillion}</h2>
              </div>
              <div className="virus-v">
                <img
                  className="virus"
                  src={covidred}
                  alt="virus"
                  width="100px"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
  );
};

export default TrackerSiete;
