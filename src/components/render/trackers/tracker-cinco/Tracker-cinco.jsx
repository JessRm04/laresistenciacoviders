import React from "react";
import "./Tracker-cinco.css";
import "bootstrap/dist/css/bootstrap.css";
import MolTrackerCincoFlags from "./Mol-tracker-cinco-flag";
import MolTrackerCincoCases from "./Mol-tracker-cinco-cases";

const TrackerCinco = () => {
  return(
  <div className="tableContainer">
    <div className="main-admin">
    <div
      className="chat-content"
      id="country-wise"
      tabIndex="5"
      style={{overflow:'hidden', outline:'none'}}
    >
      <h1 className="stat-head">Covid-19 Country Wise - Tabs</h1>
      <div className="corona-update-in-tab">
        <ul className="nav nav-tabs">
          <li><MolTrackerCincoFlags /></li>
        </ul>
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
