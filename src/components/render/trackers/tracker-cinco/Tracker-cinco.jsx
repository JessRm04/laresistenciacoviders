import React from "react";
import "./Tracker-cinco.css";
import "bootstrap/dist/css/bootstrap.css";
import MolTrackerCincoFlags from "./Mol-tracker-cinco-flag";
import MolTrackerCincoCases from "./Mol-tracker-cinco-cases";
import Layout from '../tracker-layout/Layout';
import TrackerDiecinueve from '../tracker-covid19/Tracker-covid-diecinueve';

const TrackerCinco = () => {
  return(
    <div className="container-tracker-cinco">
      <div className='layout-trackers'>
        <Layout />
        <TrackerDiecinueve />
      </div>
      <div className="table-Container">
        <div className="main-admin">
          <div
            className="chat-content"
            id="country-wise"
            tabIndex="5"
            /*style={{overflow:'hidden', outline:'none'}}*/
          >
            <h1 className="stat-head">Covid-19 Country Wise - Tabs</h1>
            <div className="corona-update-in-tab">
              <ul id="nav-item">
                <li><MolTrackerCincoFlags id='nav-item'/></li>
              </ul>
            </div>
            <div className="tab-content">
              <MolTrackerCincoCases />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackerCinco;

