import React from "react";
import "./Tracker-diecinueve-right.css";
import "bootstrap/dist/css/bootstrap.css";
import MolTrackerDiecinueveFlags from "./Mol-tracker-diecinueve-flag";
import MolTrackerDiecinuevecases from "./Mol-tracker-diecinueve-cases";

const TrackerDiecinueveRight = () => {
  return(
  <div className="tableContainer">
    <div
      className="chat-content"
      id="country-wise"
      tabIndex="5"
      style={{overflow:'hidden', outline:'none'}}
    >
      <h1 className="stat-head">Covid-19 Country Wise - Tabs</h1>
      <div className="corona-update-in-tab">
        <ul className="nav nav-tabs">
          <li><MolTrackerDiecinueveFlags /></li>
        </ul>
        <div className="tab-content">
          <MolTrackerDiecinuevecases />
        </div>
      </div>
     </div>
  </div>
  );
};

export default TrackerDiecinueveRight;
