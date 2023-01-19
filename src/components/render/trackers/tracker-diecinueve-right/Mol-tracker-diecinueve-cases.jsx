import React from 'react';
import DataApi from "../../../../services/Services-data-api-countries";
import "./Tracker-diecinueve-right.css";
import '../tracker-dos/dos-country.css';
import "bootstrap/dist/css/bootstrap.css";
import covidred from '../../../../assets/img/covidred.svg';
import covidblue from '../../../../assets/img/covidblue.svg';
import covidgreen from '../../../../assets/img/covidgreen.svg';
import covidorange from "../../../../assets/img/covidorange.svg";
import coviddark from "../../../../assets/img/covid-redark.svg";
import covidefult from "../../../../assets/img/covid-defult.svg";

const MolTrackerDiecinuevecases = () => {
    const responseData = DataApi();
  return responseData
        .sort((a, b) => b.cases - a.cases)
        .slice(0, 10)
        .map((item) =>(
            <div id={item.country} data-country-code="US" className="tab-pane" key={item.countryInfo._id}>
            <div className="covid-world-widget">
              <div className="updated-time row">
                <div className="col-md-4 col-lg-3 col-6">
                  <div className="covid-widget-1 defult-bx">
                    <div className="icon">
                      <img src={covidefult} alt="" />
                    </div>
                    <div className="info">
                      <h5>Total Cases</h5>
                      <h3>{item.todayCases}</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 col-6">
                  <div className="covid-widget-1 red-bx">
                    <div className="icon">
                      <img src={covidred} alt="" />
                    </div>
                    <div className="info">
                      <h5>Total Deaths</h5>
                      <h3>{item.deaths}</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 col-6">
                  <div className="covid-widget-1 green-bx">
                    <div className="icon">
                      <img src={covidgreen} alt="" />
                    </div>
                    <div className="info">
                      <h5>Total Recovered</h5>
                      <h3>{item.todayRecovered}</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 col-6">
                  <div className="covid-widget-1 blue-bx">
                    <div className="icon">
                      <img src={covidblue} alt="" />
                    </div>
                    <div className="info">
                      <h5>Total Active</h5>
                      <h3>{item.active}</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 col-6">
                  <div className="covid-widget-1 orange-bx">
                    <div className="icon">
                      <img src={covidorange} alt="" />
                    </div>
                    <div className="info">
                      <h5>New Cases</h5>
                      <h3>{item.todayCases}</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 col-6">
                  <div className="covid-widget-1 redark-bx">
                    <div className="icon">
                      <img src={coviddark} alt="" />
                    </div>
                    <div className="info">
                      <h5>New Deaths</h5>
                      <h3>{item.todayDeaths}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
  );
}

export default MolTrackerDiecinuevecases;