import React from 'react';
import geo from "../../../../assets/images/geo.png";
import covidblue from "../../../../assets/img/covidblue.svg";
import covidred from "../../../../assets/img/covidred.svg";
import covidorange from "../../../../assets/img/covidorange.svg";
import covidgreen from "../../../../assets/img/covidgreen.svg";
import Layout from "../tracker-layout/Layout";
import TrackerDiecinueve from "../tracker-covid19/Tracker-covid-diecinueve";
import DataApiUsa from "../../../../services/Servives-data-api-usa";


const TrackerSieteBis = () => {
    const responseData = DataApiUsa();
    
  return (
    <div className='container-tracker-siete'>
        <div>
            <Layout />
            <TrackerDiecinueve />
        </div>
        <div className="chat-content continent-area active" id="continent" tabIndex="8" >
                    <div className="row">
                        <div className="col-xl-8 col-lg-6">
                            <div className="widget-area">
                                <div className="widget-head">
                                    <h4 className="dez-title">World</h4>
                                </div>
                                <div className="widget-body">
                                    <div id="continent-map" className="continent-map">
                                        <img src={geo} alt='img mapamundi' className='mapamundi'/>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="row continent-on">
                                <div className="col-xl-12 col-lg-12">
                                    <div className="country-datainfo">
                                        <h3 className="dez-title">
                                            {/* <div id="country_flag"><img src={responseData.countryInfo.flag}
                                            alt={responseData.country} className="img-fluid mr-3" width="70"/></div> */}
                                            <span id="country_name">USA</span>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-4">
                                    <div className="covid-widget-1 defult-bx">
                                        <div className="icon">
                                            <img src={covidblue} alt="img covid" />
                                        </div>
                                        <div className="info">
                                            <h5>Total Cases</h5>
                                            <h3 id="country_cases">{responseData.cases}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-4">
                                    <div className="covid-widget-1 orange-bx">
                                        <div className="icon">
                                            <img src={covidorange} alt="img covid"/>
                                        </div>
                                        <div className="info">
                                            <h5>Today Cases</h5>
                                            <h3 id="country_todayCases">{responseData.todayCases}</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-4">
                                    <div className="covid-widget-1 red-bx">
                                        <div className="icon">
                                            <img src={covidgreen} alt="img covid"/>
                                        </div>
                                        <div className="info">
                                            <h5>Total Deaths</h5>
                                            <h3 id="country_deaths">{responseData.deaths}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-4">
                                    <div className="covid-widget-1 redark-bx">
                                        <div className="icon">
                                            <img src={covidred} alt="img covid"/>
                                        </div>
                                        <div className="info">
                                            <h5>Today Deaths</h5>
                                            <h3 id="country_todayDeaths">{responseData.todayDeaths}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-4">
                                    <div className="covid-widget-1 green-bx">
                                        <div className="icon">
                                            <img src={covidgreen} alt="img covid"/>
                                        </div>
                                        <div className="info">
                                            <h5>Recovered</h5>
                                            <h3 id="country_recovered">{responseData.recovered}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-4">
                                    <div className="covid-widget-1 blue-bx">
                                        <div className="icon">
                                            <img src={covidblue} alt="img covid"/>
                                        </div>
                                        <div className="info">
                                            <h5>Active</h5>
                                            <h3 id="country_active">{responseData.active}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-4">
                                    <div className="covid-widget-1 orange-bx">
                                        <div className="icon">
                                            <img src={covidorange} alt="img covid"/>
                                        </div>
                                        <div className="info">
                                            <h5>Critical</h5>
                                            <h3 id="country_critical">{responseData.critical}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-4">
                                    <div className="covid-widget-1 defult-bx">
                                        <div className="icon">
                                            <img src={covidgreen} alt="img covid"/>
                                        </div>
                                        <div className="info">
                                            <h5>Cases Per Million</h5>
                                            <h3 id="country_casesPerOneMillion">{responseData.casesPerOneMillion}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-4">
                                    <div className="covid-widget-1 red-bx">
                                        <div className="icon">
                                            <img src={covidred} alt="img covid"/>
                                        </div>
                                        <div className="info">
                                            <h5>Deaths Per Million</h5>
                                            <h3 id="country_deathsPerOneMillion">{responseData.deathsPerOneMillion}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>     
    )
}

export default TrackerSieteBis